import { createNode } from './createNode';

export const LLMNode = createNode({
  type: 'llm',
  title: 'LLM',
  subtitle: 'Language model step',
  handles: [
    { type: 'target', position: 'left', id: 'system', style: { top: '33%' } },
    { type: 'target', position: 'left', id: 'prompt', style: { top: '66%' } },
    { type: 'source', position: 'right', id: 'response' },
  ],
  fields: [],
});
