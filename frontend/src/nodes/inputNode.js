import { createNode } from './createNode';

export const InputNode = createNode({
  type: 'customInput',
  title: 'Input',
  subtitle: 'Pipeline entry point',
  handles: [{ type: 'source', position: 'right', id: 'value' }],
  fields: [
    {
      name: 'inputName',
      label: 'Name',
      defaultValue: '',
      type: 'text',
    },
    {
      name: 'inputType',
      label: 'Type',
      defaultValue: 'Text',
      type: 'select',
      options: ['Text', 'File'],
    },
  ],
});
