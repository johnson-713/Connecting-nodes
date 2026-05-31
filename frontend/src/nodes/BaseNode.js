import { Handle, NodeResizeControl, Position } from 'reactflow';
import { NODE_MIN_HEIGHT, NODE_MIN_WIDTH } from '../constants/nodes';
import { handleClass, nodeResizerClass, nodeShellClass } from '../styles/classes';

const positionMap = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};

export function BaseNode({
  id,
  title,
  subtitle,
  handles = [],
  children,
  className = '',
  style,
}) {
  const leftHandles = handles.filter((h) => h.position === 'left');
  const rightHandles = handles.filter((h) => h.position === 'right');

  return (
    <div className={`${nodeShellClass} ${className}`.trim()} style={style}>
      <NodeResizeControl
        nodeId={id}
        position="bottom-right"
        minWidth={NODE_MIN_WIDTH}
        minHeight={NODE_MIN_HEIGHT}
        className={nodeResizerClass}
      />

      {leftHandles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={positionMap.left}
          id={`${id}-${handle.id}`}
          style={handle.style}
          className={handleClass}
        />
      ))}

      <div className="mb-1.5">
        <span className="block text-sm font-semibold leading-tight">{title}</span>
        {subtitle && (
          <span className="mt-0.5 block text-[0.6875rem] leading-tight text-pipeline-muted">{subtitle}</span>
        )}
      </div>

      {children && (
        <div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-auto">{children}</div>
      )}

      {rightHandles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={positionMap.right}
          id={`${id}-${handle.id}`}
          style={handle.style}
          className={handleClass}
        />
      ))}
    </div>
  );
}
