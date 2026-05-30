import { useState } from 'react';
import { useStore } from './store';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/pipelines/parse`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const { num_nodes, num_edges, is_dag } = await response.json();
      const dagLabel = is_dag
        ? 'Yes — your pipeline has no cycles'
        : 'No — your pipeline contains a cycle';

      alert(
        `Pipeline Analysis\n\n` +
          `Nodes: ${num_nodes}\n` +
          `Edges: ${num_edges}\n` +
          `Valid DAG: ${dagLabel}`
      );
    } catch (error) {
      alert(
        `Could not reach the backend.\n\n` +
          `Start the API with: uvicorn main:app --reload --port 8000\n\n` +
          `Details: ${error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex shrink-0 justify-center border-t border-pipeline-border bg-pipeline-surface px-4 py-4 sm:px-6">
      <button
        type="button"
        className="rounded-[10px] bg-violet-600 px-7 py-2.5 text-[0.9375rem] font-semibold text-white transition hover:bg-violet-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Submitting…' : 'Submit Pipeline'}
      </button>
    </div>
  );
};
