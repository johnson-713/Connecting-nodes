import { InputNode } from './inputNode';
import { OutputNode } from './outputNode';
import { LLMNode } from './llmNode';
import { TextNode } from './textNode';
import {
  ConstantNode,
  FilterNode,
  MergeNode,
  DelayNode,
  NoteNode,
} from './demoNodes';

export const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  constant: ConstantNode,
  filter: FilterNode,
  merge: MergeNode,
  delay: DelayNode,
  note: NoteNode,
};

export const toolbarNodes = [
  { type: 'customInput', label: 'Input' },
  { type: 'text', label: 'Text' },
  { type: 'llm', label: 'LLM' },
  { type: 'customOutput', label: 'Output' },
  { type: 'constant', label: 'Constant' },
  { type: 'filter', label: 'Filter' },
  { type: 'merge', label: 'Merge' },
  { type: 'delay', label: 'Delay' },
  { type: 'note', label: 'Note' },
];

export const getDefaultNodeData = (nodeId, type) => {
  const base = { id: nodeId, nodeType: type };

  switch (type) {
    case 'customInput':
      return { ...base, inputName: nodeId.replace('customInput-', 'input_'), inputType: 'Text' };
    case 'customOutput':
      return { ...base, outputName: nodeId.replace('customOutput-', 'output_'), outputType: 'Text' };
    case 'text':
      return { ...base, text: '{{input}}' };
    case 'constant':
      return { ...base, value: 'Hello world' };
    case 'filter':
      return { ...base, condition: 'contains', matchValue: '' };
    case 'merge':
      return { ...base, strategy: 'concat' };
    case 'delay':
      return { ...base, milliseconds: 1000 };
    case 'note':
      return { ...base, content: 'Add a comment about this pipeline...' };
    default:
      return base;
  }
};
