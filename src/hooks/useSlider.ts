import { RefObject, useState } from "react";

export const useSlider = (
  sliderRef: RefObject<HTMLDivElement>,
  slidesCount: number
) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const updateSlideClasses = (offset: number) => {
    if (!sliderRef.current) return;
    
    const slides = Array.from(sliderRef.current.children) as HTMLDivElement[];
    slides.forEach(slide => {
      slide.className = `slide offset-${offset}`;
    });
  };

  const prevSlide = () => {
    setCurrentSlide(prev => {
      const newSlide = prev === 1 ? slidesCount : prev - 1;
      updateSlideClasses(newSlide === slidesCount - 1 ? slidesCount : newSlide - 1);
      return newSlide;
    });
  };

  const nextSlide = () => {
    setCurrentSlide(prev => {
      const newSlide = prev === slidesCount ? 1 : prev + 1;
      updateSlideClasses(newSlide === 1 ? 0 : newSlide - 1);
      return newSlide;
    });
  };

  return { nextSlide, prevSlide, currentSlide };
};
