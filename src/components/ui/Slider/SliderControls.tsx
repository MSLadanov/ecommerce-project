import { useSlider } from "@/hooks/useSlider";
import { RefObject, ReactElement, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface ISliderControlsProps {
  sliderRef: RefObject<HTMLDivElement>;
  autoSlide?: boolean;
  slideDelay?: number;
  withControls: boolean;
  slidesCount: number;
}

export const SliderControls: React.FC<ISliderControlsProps> = ({
  sliderRef,
  autoSlide,
  slideDelay,
  withControls,
  slidesCount,
}): ReactElement => {
  const { prevSlide, nextSlide } = useSlider(sliderRef, slidesCount);
  useEffect(() => {
    if (autoSlide && sliderRef) {
      setInterval(() => {
        nextSlide();
      }, slideDelay);
    }
  }, [autoSlide, nextSlide, slideDelay, sliderRef]);
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
