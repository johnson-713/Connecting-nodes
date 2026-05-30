import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useStore } from '../store';
import { textareaClass } from '../styles/classes';
import { BaseNode } from './BaseNode';
import { NodeField } from './NodeField';
import { parseVariables } from './parseVariables';

const MIN_WIDTH = 220;
const MIN_HEIGHT = 100;
const MAX_WIDTH = 420;

export function TextNode({ id, data }) {
  const textareaRef = useRef(null);
  const updateNodeField = useStore((state) => state.updateNodeField);

  const text = data?.text ?? '{{input}}';
  const variables = useMemo(() => parseVariables(text), [text]);

  const resizeNode = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = 'auto';
    const contentHeight = el.scrollHeight;
    el.style.height = `${contentHeight}px`;

    const contentWidth = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, el.scrollWidth + 32));
    const nodeHeight = Math.max(MIN_HEIGHT, contentHeight + 72);

    el.closest('.node-shell')?.style.setProperty('width', `${contentWidth}px`);
    el.closest('.node-shell')?.style.setProperty('min-height', `${nodeHeight}px`);
  }, []);

  useEffect(() => {
    resizeNode();
  }, [text, resizeNode]);

  const handleChange = (e) => {
    updateNodeField(id, 'text', e.target.value);
  };

  const leftHandles = variables.map((name, index) => ({
    type: 'target',
    position: 'left',
    id: `var-${name}`,
    style: {
      top: variables.length === 1 ? '50%' : `${((index + 1) / (variables.length + 1)) * 100}%`,
    },
  }));

  const rightHandles = [{ type: 'source', position: 'right', id: 'output' }];

  return (
    <BaseNode
      id={id}
      title="Text"
      subtitle={variables.length ? `${variables.length} variable(s)` : undefined}
      handles={[...leftHandles, ...rightHandles]}
    >
      <NodeField label="Text">
        <textarea
          ref={textareaRef}
          className={`${textareaClass} min-h-[28px] overflow-hidden`}
          value={text}
          rows={1}
          onChange={handleChange}
          onInput={resizeNode}
          placeholder="Type text with {{variables}}"
        />
      </NodeField>
      {variables.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1.5">
          {variables.map((name) => (
            <span
              key={name}
              className="rounded-full bg-violet-600/15 px-2 py-0.5 font-mono text-[0.6875rem] text-violet-300"
            >{`{{${name}}}`}</span>
          ))}
        </div>
      )}
    </BaseNode>
  );
}
