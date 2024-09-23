import { useWebVitals } from '@/hooks/use-web-vitals';
import { router } from '@/lib/router.tsx';
import { RouterProvider } from 'react-router-dom';

function App() {
  useWebVitals();

  return (
    <main className="min-h-[calc(100vh_-_theme(spacing.16))]">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
