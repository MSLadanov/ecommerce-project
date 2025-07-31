import { useState } from "react";

export const useSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => prev--);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  return { nextSlide, prevSlide, currentSlide };
};
