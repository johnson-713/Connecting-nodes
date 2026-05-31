import { DraggableNode } from './draggableNode';
import { toolbarNodes } from './nodes';

export const PipelineToolbar = () => {
  return (
    <div className="flex flex-col">
      {toolbarNodes.map(({ type, label }, index) => (
        <div
          key={type}
          className={
            index < toolbarNodes.length - 1 ? 'border-b border-pipeline-border' : ''
          }
        >
          <DraggableNode type={type} label={label} />
        </div>
      ))}
    </div>
  );
};
