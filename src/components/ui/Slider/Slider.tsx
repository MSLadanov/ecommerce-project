import { ReactElement, ReactNode, useState } from "react";
import "./style.scss";

interface ISliderProps {
  children: ReactNode;
  withControls?: boolean;
  autoSlide?: boolean;
}

export const Slider: React.FC<ISliderProps> = ({
  children,
  withControls = true,
  autoSlide = false,
}): ReactElement => {
  const [slides, setSlides] = useState(children)
  console.log(slides)
  return (
    <div className="slider">
      <div className="slider__frame"></div>
      {withControls && <div className="slider__controls"></div>}
    </div>
  );
};
