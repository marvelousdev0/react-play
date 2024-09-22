import { Product as ProductType } from '@/components/features/products/product-list.tsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel.tsx';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.tsx';
import Autoplay from 'embla-carousel-autoplay';

export default function Product({ product }: { product: ProductType }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card x-chunk={`product-${product.id}`}>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <h4>{product.title}</h4>
                <div className="text-lg font-semibold">
                  {Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(product.price)}
                </div>
              </div>
            </CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={product.thumbnail} alt={product.title} />
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="w-max-xl">
        <Carousel
          className="w-full"
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 4000 })]}
        >
          <CarouselContent>
            {product.images.map((image) => (
              <CarouselItem key={image}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={image} alt={product.title} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
