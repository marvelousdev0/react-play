import Product from '@/components/features/product';
import ProductsPagination from '@/components/features/products-pagination';
import { useEffect, useState } from 'react';

export type Product = {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  depth: number;
  height: number;
  width: number;
  discountPercentage: number;
  id: number;
  images: string[];
  meta: { createdAt: string; updatedAt: string; barCode: string; qrCode: string };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: { rating: number; comment: string; date: string }[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
};

type Products = {
  limit: number;
  skip: number;
  products: Product[];
  total: number;
};

const OFFSET = 5;

export default function ProductList({ category }: { category: string | null }) {
  const [data, setData] = useState<Products | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const totalPages = Math.ceil((data?.total || 0) / OFFSET);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    function fetchProducts() {
      fetch(
        `https://dummyjson.com/products/category/${category}?limit=${OFFSET}&skip=${(pageNumber - 1) * OFFSET}`,
        {
          signal,
        },
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error(error));
    }

    if (category) {
      fetchProducts();
    }

    return () => {
      controller.abort('Operation canceled by the user.');
      setData(null);
      setPageNumber(1);
    };
  }, [category, pageNumber]);

  function onPrevious() {
    setPageNumber((prev) => prev - 1);
  }

  function onNext() {
    setPageNumber((prev) => prev + 1);
  }

  function onNavigateToPage(page: number) {
    setPageNumber(page);
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data?.products.map((product) => <Product key={product.id} product={product} />)}
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
