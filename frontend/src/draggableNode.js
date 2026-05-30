import { Tooltip, TooltipContent, TooltipTrigger } from './components/ui/tooltip';
import { getNodeIcon } from './nodes/nodeIcons';

export const DraggableNode = ({ type, label }) => {
  const Icon = getNodeIcon(type);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <div
          className="flex h-10 w-10 cursor-grab select-none items-center justify-center rounded-[10px] border border-pipeline-border bg-pipeline-elevated text-pipeline-text transition hover:border-violet-600 hover:bg-violet-600/15 active:scale-[0.98] active:cursor-grabbing"
          onDragStart={(event) => onDragStart(event, type)}
          draggable
          aria-label={label}
        >
          <Icon className="h-4 w-4" strokeWidth={2} />
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom">{label}</TooltipContent>
    </Tooltip>
  );
};
