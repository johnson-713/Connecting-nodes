import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Clock,
  Filter,
  GitMerge,
  Hash,
  Sparkles,
  StickyNote,
  Type,
} from 'lucide-react';

export const nodeIcons = {
  customInput: ArrowDownToLine,
  text: Type,
  llm: Sparkles,
  customOutput: ArrowUpFromLine,
  constant: Hash,
  filter: Filter,
  merge: GitMerge,
  delay: Clock,
  note: StickyNote,
};

export function getNodeIcon(type) {
  return nodeIcons[type] || Type;
}
