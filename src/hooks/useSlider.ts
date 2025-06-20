import { RefObject } from "react";

export const useSlider = (sliderRef: RefObject<HTMLDivElement>) => {
  const prevSlide = () => {
    sliderRef.current.childNodes.forEach((slide: HTMLDivElement) =>
      slide.classList.toggle("scroll")
    );
  };
  const nextSlide = () => {
    sliderRef.current.childNodes.forEach((slide: HTMLDivElement) =>
      slide.classList.toggle("scroll2")
    );
  };
  return { nextSlide, prevSlide };
};
