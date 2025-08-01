import { ReactElement } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface ISliderControlsProps {
  withControls: boolean;
  nextSlide: () => void;
  prevSlide:() => void;
}

export const SliderControls: React.FC<ISliderControlsProps> = ({
  nextSlide,
  prevSlide,
  withControls,
}): ReactElement => {
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
