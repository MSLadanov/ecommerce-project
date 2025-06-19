import { ReactNode, useState } from "react";

export const useSlider = (initialSlides: ReactNode[]) => {
  const [slides, setSlides] = useState(initialSlides);
  const prevSlide = () => {
    const currentSlides = [...slides];
    const lastSlide = currentSlides.pop();
    const newSlides = [lastSlide, ...currentSlides];
    setSlides(newSlides);
  };
  const nextSlide = () => {
    const currentSlides = [...slides];
    const firstSlide = currentSlides[0];
    const newSlides = [...currentSlides.slice(1), firstSlide];
    setSlides(newSlides);
  };
  return { slides, nextSlide, prevSlide };
};
