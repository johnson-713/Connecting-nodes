import { Handle, Position } from 'reactflow';
import { handleClass, nodeShellClass } from '../styles/classes';

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

      <div className="mb-2.5">
        <span className="block text-[0.9375rem] font-semibold">{title}</span>
        {subtitle && (
          <span className="mt-0.5 block text-xs text-pipeline-muted">{subtitle}</span>
        )}
      </div>

      {children && <div className="flex flex-col gap-2">{children}</div>}

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
