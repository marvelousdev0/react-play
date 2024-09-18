import Categories from '@/components/features/categories';
import ProductList from '@/components/features/product-list';
import { useWebVitals } from '@/hooks/use-web-vitals';
import { useEffect, useState } from 'react';

function App() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useWebVitals();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/products/category-list', { signal })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setSelectedCategory(data[0]);
      })
      .catch((error) => console.error(error));

    return () => {
      controller.abort('Operation canceled by the user.');
      setCategories([]);
      setSelectedCategory(null);
    };
  }, []);

  function onCategoryClick(category: string) {
    setSelectedCategory(category);
  }

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-5xl font-semibold text-center">Shop</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid text-sm text-muted-foreground" x-chunk="categories">
          <Categories
            categories={categories}
            onCategoryClick={onCategoryClick}
            selectedCategory={selectedCategory}
          />
        </nav>
        <ProductList category={selectedCategory} />
      </div>
    </main>
  );
}

export default App;
