export function NodeField({ label, children }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-medium text-pipeline-muted">{label}</span>
      {children}
    </label>
  );
}
