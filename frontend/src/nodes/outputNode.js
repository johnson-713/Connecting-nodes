import { createNode } from './createNode';

export const OutputNode = createNode({
  type: 'customOutput',
  title: 'Output',
  subtitle: 'Pipeline result',
  handles: [{ type: 'target', position: 'left', id: 'value' }],
  fields: [
    {
      name: 'outputName',
      label: 'Name',
      defaultValue: '',
      type: 'text',
    },
    {
      name: 'outputType',
      label: 'Type',
      defaultValue: 'Text',
      type: 'select',
      options: ['Text', 'Image'],
    },
  ],
});
