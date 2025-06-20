import {
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSlider } from "@hooks/useSlider";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import "./style.scss";

interface ISliderProps {
  children: ReactNode[];
  withControls?: boolean;
  autoSlide?: boolean;
  slideDelay?: number;
}

interface ISliderControlsProps {
  sliderRef: RefObject<HTMLDivElement>;
  autoSlide?: boolean;
  slideDelay?: number;
  withControls: boolean;
  slidesCount: number;
}

const SliderControls: React.FC<ISliderControlsProps> = ({
  sliderRef,
  autoSlide,
  slideDelay,
  withControls,
  slidesCount,
}): ReactElement => {
  const { prevSlide, nextSlide } = useSlider(sliderRef, slidesCount);
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

export const Slider: React.FC<ISliderProps> = ({
  children,
  withControls = true,
  autoSlide = false,
  slideDelay = 2000,
}): ReactElement => {
  const sliderRef = useRef(null);
  const [sliderRefState, setSliderRefState] = useState(null);
  useEffect(() => {
    setSliderRefState(sliderRef);
  }, [sliderRef]);
  return (
    <div className="slider">
      <div className="slider__frame" ref={sliderRef}>
        {children}
      </div>
      <SliderControls
        sliderRef={sliderRefState}
        autoSlide={autoSlide}
        slideDelay={slideDelay}
        withControls={withControls}
        slidesCount={children.length}
      />
    </div>
  );
};
