import { ReactElement, ReactNode, useState, useEffect } from "react";
import "./style.scss";

interface ISliderProps {
  children: ReactNode;
  withControls?: boolean;
  autoSlide?: boolean;
  slideDelay?: number;
}

export const Slider: React.FC<ISliderProps> = ({
  children,
  withControls = true,
  autoSlide = true,
  slideDelay = 2000,
}): ReactElement => {
  const [slides, setSlides] = useState(children);
  const initSlider = () => {
    console.log("slide");
  };
  useEffect(() => {
    if (autoSlide) {
      setInterval(() => {
        initSlider();
      }, slideDelay);
    }
  }, [autoSlide, slideDelay]);
  return (
    <div className="slider">
      <div className="slider__frame"></div>
      {withControls && <div className="slider__controls"></div>}
    </div>
  );
};
