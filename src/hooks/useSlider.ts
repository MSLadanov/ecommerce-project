import { RefObject, } from "react";

export const useSlider = (sliderRef : RefObject<HTMLDivElement>) => {
  
  const prevSlide = () => {
    console.log(sliderRef)
  };
  const nextSlide = () => {
    
  };
  return { nextSlide, prevSlide };
};
