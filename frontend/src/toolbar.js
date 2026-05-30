import { DraggableNode } from './draggableNode';
import { toolbarNodes } from './nodes';

export const PipelineToolbar = () => {
  return (
    <div className="shrink-0 border-b border-pipeline-border bg-pipeline-surface px-4 py-4 sm:px-6">
      <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-pipeline-muted">
        Nodes
      </p>
      <div className="flex max-w-full flex-wrap gap-2">
        {toolbarNodes.map(({ type, label }) => (
          <DraggableNode key={type} type={type} label={label} />
        ))}
      </div>
    </div>
  );
};
