import Categories from '@/components/features/products/categories';
import ProductList from '@/components/features/products/product-list';
import {
  fetchCategories,
  setSelectedCategory,
} from '@/components/features/products/products-slice';
import { useAppDispatch, useAppState } from '@/lib/store';
import { useEffect } from 'react';

export default function Products() {
  const dispatch = useAppDispatch();
  const { categories, selectedCategory } = useAppState((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  function onCategoryClick(category: string) {
    dispatch(setSelectedCategory(category));
  }

  return (
    <>
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-5xl font-semibold text-center">Shop</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid text-sm text-muted-foreground" x-chunk="categories">
          <Categories
            categories={categories.data}
            onCategoryClick={onCategoryClick}
            selectedCategory={selectedCategory}
          />
        </nav>
        <ProductList category={selectedCategory} />
      </div>
    </>
  );
}
