import { RefObject, useState } from "react";

export const useSlider = (
  sliderRef: RefObject<HTMLDivElement>,
  slidesCount: number
) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const prevSlide = () => {
    setCurrentSlide((slide) => slide - 1);
    sliderRef.current.childNodes.forEach(
      (slide: HTMLDivElement) =>
        (slide.className = `slide offset-${currentSlide}`)
    );
  };
  const nextSlide = () => {
    setCurrentSlide((slide) => slide + 1);
    sliderRef.current.childNodes.forEach(
      (slide: HTMLDivElement) =>
        (slide.className = `slide offset-${currentSlide}`)
    );
  };
  return { nextSlide, prevSlide };
};
