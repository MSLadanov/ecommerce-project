import { ReactElement, ReactNode } from "react";
import { SliderControls } from "./SliderControls";
import "./style.scss";

interface ISliderProps {
  children: ReactNode[]
  withControls?: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
}

export const Slider: React.FC<ISliderProps> = ({
  children,
  withControls = true,
  nextSlide,
  prevSlide
}): ReactElement => {
  
  return (
    <div className="slider">
      <div className="slider__frame">
        {children}
      </div>
      <SliderControls
        withControls={withControls}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  );
};
