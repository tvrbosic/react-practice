import ErrorBoundary from './components/ErrorBoundary';
import TriggerError from './components/TrigerError';

function App() {
   return (
      <ErrorBoundary>
         <TriggerError />
      </ErrorBoundary>
   );
}

export default App;
