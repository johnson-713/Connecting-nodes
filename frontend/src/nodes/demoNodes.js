import { createNode } from './createNode';

export const ConstantNode = createNode({
  type: 'constant',
  title: 'Constant',
  subtitle: 'Static value source',
  handles: [{ type: 'source', position: 'right', id: 'value' }],
  fields: [
    {
      name: 'value',
      label: 'Value',
      defaultValue: 'Hello world',
      type: 'text',
    },
  ],
});

export const FilterNode = createNode({
  type: 'filter',
  title: 'Filter',
  subtitle: 'Conditional pass-through',
  handles: [
    { type: 'target', position: 'left', id: 'input' },
    { type: 'source', position: 'right', id: 'output' },
  ],
  fields: [
    {
      name: 'condition',
      label: 'Condition',
      defaultValue: 'contains',
      type: 'select',
      options: ['contains', 'equals', 'startsWith', 'endsWith'],
    },
    {
      name: 'matchValue',
      label: 'Match',
      defaultValue: '',
      type: 'text',
    },
  ],
});

export const MergeNode = createNode({
  type: 'merge',
  title: 'Merge',
  subtitle: 'Combine two inputs',
  handles: [
    { type: 'target', position: 'left', id: 'inputA', style: { top: '33%' } },
    { type: 'target', position: 'left', id: 'inputB', style: { top: '66%' } },
    { type: 'source', position: 'right', id: 'output' },
  ],
  fields: [
    {
      name: 'strategy',
      label: 'Strategy',
      defaultValue: 'concat',
      type: 'select',
      options: ['concat', 'zip', 'first'],
    },
  ],
});

export const DelayNode = createNode({
  type: 'delay',
  title: 'Delay',
  subtitle: 'Wait before continuing',
  handles: [
    { type: 'target', position: 'left', id: 'input' },
    { type: 'source', position: 'right', id: 'output' },
  ],
  fields: [
    {
      name: 'milliseconds',
      label: 'Delay (ms)',
      defaultValue: 1000,
      type: 'number',
      min: 0,
    },
  ],
});

export const NoteNode = createNode({
  type: 'note',
  title: 'Note',
  subtitle: 'Documentation only',
  className: 'border-dashed bg-violet-600/10',
  handles: [],
  fields: [
    {
      name: 'content',
      label: 'Note',
      defaultValue: 'Add a comment about this pipeline...',
      type: 'textarea',
      rows: 3,
    },
  ],
});
