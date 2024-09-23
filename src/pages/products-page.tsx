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
      <div className="mx-auto lg:mx-0 lg:grid lg:max-w-none lg:gap-x-16 lg:gap-y-6 xl:gap-x-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Products
        </h1>
        <div className="mt-6 lg:mt-0 ">
          <p className="text-lg leading-8 text-gray-600">
            Redux store is used to manage the state of the products page. Refer{' '}
            <code>state.products</code> in the store. The categories are fetched from the
            API and the products are displayed based on the selected category. Also
            includes pagination to navigate through the products.
          </p>
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <div
          className="grid text-sm text-muted-foreground sticky top-[4rem] h-[calc(100vh-4rem)] overflow-y-auto"
          x-chunk="categories"
        >
          <Categories
            categories={categories.data}
            onCategoryClick={onCategoryClick}
            selectedCategory={selectedCategory}
          />
        </div>
        <ProductList category={selectedCategory} />
      </div>
    </>
  );
}
