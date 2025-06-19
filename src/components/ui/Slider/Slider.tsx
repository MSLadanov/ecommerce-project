import { ReactElement, ReactNode, useEffect } from "react";
import { useSlider } from "@hooks/useSlider";
import "./style.scss";

interface ISliderProps {
  children: ReactNode[];
  withControls?: boolean;
  autoSlide?: boolean;
  slideDelay?: number;
}

export const Slider: React.FC<ISliderProps> = ({
  children,
  withControls = true,
  autoSlide = false,
  slideDelay = 2000,
}): ReactElement => {
  const { slides, nextSlide, prevSlide } = useSlider(children);
  useEffect(() => {
    if (autoSlide) {
      setInterval(() => {
        nextSlide()
      }, slideDelay);
    }
  }, [autoSlide, nextSlide, slideDelay]);
  return (
    <div className="slider">
      <div className="slider__frame">{slides}</div>
      {withControls && (
        <div className="slider__controls">
          <div className="slider__control-prev" onClick={() => prevSlide()}>
            -
          </div>
          <div className="slider__control-next" onClick={() => nextSlide()}>
            +
          </div>
        </div>
      )}
    </div>
  );
};
