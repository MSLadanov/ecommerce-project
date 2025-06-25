import { RefObject, useRef } from "react";

export const useSlider = (
  sliderRef: RefObject<HTMLDivElement>,
  slidesCount: number
) => {
  const currentSlide = useRef(0);
  const updateSlideClasses = (offset: number) => {
    if (!sliderRef.current) return;

    const slides = Array.from(sliderRef.current.children) as HTMLDivElement[];
    slides.forEach((slide) => {
      slide.className = `slide offset-${offset}`;
    });
  };
  const prevSlide = () => {
    if (currentSlide.current === 0) {
      currentSlide.current = slidesCount;
      updateSlideClasses(currentSlide.current);
    } else {
      currentSlide.current--;
      updateSlideClasses(currentSlide.current);
    }
  };
  const nextSlide = () => {
    console.log(slidesCount)
    if (currentSlide.current === slidesCount) {
      currentSlide.current = 0;
      updateSlideClasses(currentSlide.current);
    } else {
      currentSlide.current++;
      updateSlideClasses(currentSlide.current);
    }
  };

  return { nextSlide, prevSlide, currentSlide };
};
