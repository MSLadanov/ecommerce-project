import { ReactElement, ReactNode, useEffect } from "react";
import { useSlider } from "@hooks/useSlider";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
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
            <FaArrowCircleLeft />
          </div>
          <div className="slider__control-next" onClick={() => nextSlide()}>
            <FaArrowCircleRight />
          </div>
        </div>
      )}
    </div>
  );
};
