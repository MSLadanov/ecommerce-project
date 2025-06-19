import { RefObject, } from "react";

export const useSlider = (sliderRef : RefObject<HTMLDivElement>) => {
  const {current} = sliderRef
  const prevSlide = () => {
    console.log(current)
  };
  const nextSlide = () => {
    
  };
  return { nextSlide, prevSlide };
};
