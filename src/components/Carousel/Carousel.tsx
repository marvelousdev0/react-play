import { useCallback, useEffect, useState } from 'react';
import './Carousel.css';
import CarouselIndicators from './CarouselIndicators';

const INTERVAL = 5000;

const images = [
  'https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BYzg2NjNhNTctMjUxMi00ZWU4LWI3ZjYtNTI0NTQxNThjZTk2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SY1000_SX677_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BYzk0YWQzMGYtYTM5MC00NjM2LWE5YzYtMjgyNDVhZDg1N2YzXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg',
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  function prevSlide() {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  useEffect(() => {
    const autoplayInterval = setInterval(nextSlide, INTERVAL);
    return () => clearInterval(autoplayInterval);
  }, [nextSlide]);

  return (
    <div className='carousel'>
      <button className='carousel__btn carousel__btn--prev' onClick={prevSlide}>
        &lt;
      </button>
      <img className='carousel__img' src={images[activeIndex]} alt='carousel' />
      <button className='carousel__btn carousel__btn--next' onClick={nextSlide}>
        &gt;
      </button>
      <CarouselIndicators
        images={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}
