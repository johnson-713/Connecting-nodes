import { useCallback } from 'react';
import { useStore } from '../store';
import { inputClass, textareaClass } from '../styles/classes';
import { BaseNode } from './BaseNode';
import { NodeField } from './NodeField';

function useNodeField(id, data, fieldName, defaultValue) {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const value = data?.[fieldName] ?? defaultValue;

  const onChange = useCallback(
    (nextValue) => updateNodeField(id, fieldName, nextValue),
    [id, fieldName, updateNodeField]
  );

  return [value, onChange];
}

function FieldRenderer({ id, data, field }) {
  const [value, onChange] = useNodeField(id, data, field.name, field.defaultValue);

  switch (field.type) {
    case 'select':
      return (
        <NodeField label={field.label}>
          <select
            className={inputClass}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            {field.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </NodeField>
      );

    case 'number':
      return (
        <NodeField label={field.label}>
          <input
            className={inputClass}
            type="number"
            value={value}
            min={field.min}
            onChange={(e) => onChange(Number(e.target.value))}
          />
        </NodeField>
      );

    case 'textarea':
      return (
        <NodeField label={field.label}>
          <textarea
            className={textareaClass}
            value={value}
            rows={field.rows || 2}
            onChange={(e) => onChange(e.target.value)}
          />
        </NodeField>
      );

    default:
      return (
        <NodeField label={field.label}>
          <input
            className={inputClass}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </NodeField>
      );
  }
}

export function createNode({ title, subtitle, handles = [], fields = [], className = '' }) {
  function ConfigNode({ id, data }) {
    return (
      <BaseNode
        id={id}
        title={title}
        subtitle={subtitle}
        handles={handles}
        className={className}
      >
        {fields.map((field) => (
          <FieldRenderer key={field.name} id={id} data={data} field={field} />
        ))}
      </BaseNode>
    );
  }

  ConfigNode.displayName = `${title}Node`;
  return ConfigNode;
}
