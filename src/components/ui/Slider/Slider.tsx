import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { SliderControls } from "./SliderControls";
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
        slidesCount={children.length - 1}
      />
    </div>
  );
};
