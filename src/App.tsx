import { useWebVitals } from '@/hooks/use-web-vitals';
import Products from '@/pages/products-page';

function App() {
  useWebVitals();

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <Products />
    </main>
  );
}

export default App;
