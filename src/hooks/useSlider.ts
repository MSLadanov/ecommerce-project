import { useState, useEffect } from "react";

interface ISliderOptions {
  slidesCount: number;
  options: {
    autoScroll: boolean;
    delay: number;
  };
}

export const useSlider = ({ slidesCount, options }: ISliderOptions) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  useEffect(() => {
    if (!options.autoScroll) return;

    const interval = setInterval(() => {
      nextSlide();
    }, options.delay);

    return () => clearInterval(interval);
  }, [options.autoScroll, options.delay, slidesCount]);

  return { nextSlide, prevSlide, currentSlide };
};
