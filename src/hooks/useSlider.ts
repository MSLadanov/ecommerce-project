import { RefObject, } from "react";

export const useSlider = (sliderRef : RefObject<HTMLDivElement>) => {
  
  const prevSlide = () => {
    sliderRef.current.classList.add('scroll')
  };
  const nextSlide = () => {
    
  };
  return { nextSlide, prevSlide };
};
