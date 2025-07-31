import { useState } from "react";

export const useSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => prev--);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => prev++);
  };

  return { nextSlide, prevSlide, currentSlide };
};
