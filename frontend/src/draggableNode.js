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
          className="flex h-8 w-8 cursor-grab select-none items-center justify-center border-0 bg-pipeline-elevated text-pipeline-text transition hover:bg-violet-600/15 active:cursor-grabbing"
          onDragStart={(event) => onDragStart(event, type)}
          draggable
          aria-label={label}
        >
          <Icon className="h-4 w-4" strokeWidth={2} />
        </div>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
};
