import { useState, useEffect } from "react";

export const useSlider = (slidesCount: number, autoScroll: boolean, delay) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };
  useEffect(() => {
    if(autoScroll){
      setInterval(() => {
        nextSlide() 
      },delay)
    }
  },[autoScroll, delay])
  return { nextSlide, prevSlide, currentSlide };
};
