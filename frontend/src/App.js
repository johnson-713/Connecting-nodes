import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { TooltipProvider } from './components/ui/tooltip';

function App() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex h-screen flex-col overflow-hidden bg-pipeline-app text-pipeline-text">
        <header className="shrink-0 border-b border-pipeline-border px-4 py-4 sm:px-6">
          <h1 className="m-0 text-xl font-semibold">Pipeline Builder</h1>
          <p className="mt-1 text-sm text-pipeline-muted">
            Drag nodes onto the canvas, connect them, then submit to validate your graph.
          </p>
        </header>

        <PipelineToolbar />

        <main className="min-h-0 min-w-0 flex-1">
          <PipelineUI />
        </main>

        <SubmitButton />
      </div>
    </TooltipProvider>
  );
}

export default App;
