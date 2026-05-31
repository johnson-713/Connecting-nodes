export function NodeField({ label, children }) {
  return (
    <label className="flex flex-col gap-0.5">
      <span className="text-[0.6875rem] font-medium text-pipeline-muted">{label}</span>
      {children}
    </label>
  );
}
