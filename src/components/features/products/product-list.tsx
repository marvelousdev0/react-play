import Product from '@/components/features/products/product.tsx';
import ProductsPagination from '@/components/features/products/products-pagination.tsx';
import {
  fetchCategoryData,
  setPageNumber,
} from '@/components/features/products/products-slice.ts';
import { useAppDispatch, useAppState } from '@/lib/store.ts';
import { useEffect } from 'react';

export const OFFSET = 5;

export default function ProductList({ category }: { category: string | null }) {
  const dispatch = useAppDispatch();
  const { categoryData, pageNumber } = useAppState((state) => state.products);

  const totalPages = Math.ceil((categoryData.data?.total || 0) / OFFSET);

  useEffect(() => {
    if (category) {
      dispatch(fetchCategoryData({ category, pageNumber, offset: OFFSET }));
    }
  }, [category, dispatch, pageNumber]);

  function onPrevious() {
    dispatch(setPageNumber(pageNumber - 1));
  }

  function onNext() {
    dispatch(setPageNumber(pageNumber + 1));
  }

  function onNavigateToPage(page: number) {
    dispatch(setPageNumber(page));
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {categoryData.data?.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {totalPages > 1 && (
        <ProductsPagination
          onNext={onNext}
          onPrevious={onPrevious}
          onNavigateToPage={onNavigateToPage}
          pageNumber={pageNumber}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
