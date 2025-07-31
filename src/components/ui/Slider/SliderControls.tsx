import { useSlider } from "@hooks/useSlider";
import { ReactElement, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface ISliderControlsProps {
  autoSlide?: boolean;
  slideDelay?: number;
  withControls: boolean;
  slidesCount: number;
}

export const SliderControls: React.FC<ISliderControlsProps> = ({
  autoSlide,
  slideDelay,
  withControls,
  slidesCount
}): ReactElement => {
  const { prevSlide, nextSlide } = useSlider(slidesCount - 1);
  useEffect(() => {
    if (autoSlide) {
      setInterval(() => {
        nextSlide();
      }, slideDelay);
    }
  }, [autoSlide, nextSlide, slideDelay]);
  if (withControls) {
    return (
      <div className="slider__controls">
        <div className="slider__control-prev" onClick={() => prevSlide()}>
          <FaArrowCircleLeft />
        </div>
        <div className="slider__control-next" onClick={() => nextSlide()}>
          <FaArrowCircleRight />
        </div>
      </div>
    );
  }
};
