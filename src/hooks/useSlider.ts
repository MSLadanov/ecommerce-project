import { ReactNode, useState } from "react";

export const useSlider = (initialSlides: ReactNode) => {
  const [slides, setSlides] = useState(initialSlides);
  const initSlider = () => {
    console.log("slide");
  };
  const nextSlide = () => {
    console.log("next");
  };
  const prevSlide = () => {
    console.log("prev");
  };
  return { slides, initSlider, nextSlide, prevSlide };
};
