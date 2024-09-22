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

export type CategoryData = {
  limit: number;
  skip: number;
  products: Product[];
  total: number;
};
