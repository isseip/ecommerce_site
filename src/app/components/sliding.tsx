'use client'
import React, { useEffect, useState, useRef } from 'react';

const images = [
  "/images/assets/men.jpg",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
];

const AutoSlidingCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const handlePrevClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
      resetTransition();
    }
  };

  const handleNextClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      resetTransition();
    }
  };

  const resetTransition = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Same duration as the transition
  };

  return (
    <div className="w-full relative overflow-hidden ">
      <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} className="w-full" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button onClick={handlePrevClick} className="btn btn-circle">❮</button>
        <button onClick={handleNextClick} className="btn btn-circle">❯</button>
      </div>
    </div>
  );
};

export default AutoSlidingCarousel;
