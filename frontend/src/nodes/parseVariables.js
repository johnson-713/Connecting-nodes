const VARIABLE_PATTERN = /\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g;

export function parseVariables(text) {
  if (!text) return [];

  const found = new Set();
  let match;

  while ((match = VARIABLE_PATTERN.exec(text)) !== null) {
    found.add(match[1]);
  }

  return Array.from(found);
}
