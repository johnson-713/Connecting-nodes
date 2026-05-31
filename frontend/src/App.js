import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { TooltipProvider } from './components/ui/tooltip';

function App() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex h-screen flex-col overflow-hidden bg-pipeline-app text-pipeline-text">
        <main className="min-h-0 min-w-0 flex-1">
          <PipelineUI />
        </main>

        <SubmitButton />
      </div>
    </TooltipProvider>
  );
}

export default App;
