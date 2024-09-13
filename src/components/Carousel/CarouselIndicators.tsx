import { Dispatch, SetStateAction } from 'react';
import './CarouselIndicators.css';

export default function CarouselIndicators({
  images,
  activeIndex,
  setActiveIndex,
}: {
  images: string[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className='carousel__indicators'>
      {images.map((_, index) => (
        <span
          key={index}
          className={`carousel__indicator ${
            index === activeIndex ? 'carousel__indicator--active' : ''
          }`}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
