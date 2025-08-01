import { ReactElement, ReactNode } from "react";
import { SliderControls } from "./SliderControls";
import "./style.scss";

interface ISliderProps {
  children: ReactNode[]
  withControls?: boolean;
  autoSlide?: boolean;
  slideDelay?: number;
  slidesCount: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

export const Slider: React.FC<ISliderProps> = ({
  children,
  withControls = true,
  autoSlide = false,
  slideDelay = 2000,
  slidesCount,
  nextSlide,
  prevSlide
}): ReactElement => {
  
  return (
    <div className="slider">
      <div className="slider__frame">
        {children}
      </div>
      <SliderControls
        autoSlide={autoSlide}
        slideDelay={slideDelay}
        withControls={withControls}
        slidesCount={slidesCount}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  );
};
