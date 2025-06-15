import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface ISliderProps {
  children: ReactNode;
  withControls: boolean;
  autoSlide: boolean;
}

export const Slider: React.FC<ISliderProps> = ({
  children,
  withControls = true,
  autoSlide = false,
}): ReactElement => {
  return (
    <div className="slider">
      <div className="slider__frame">{children}</div>
      {withControls && <div className="slider__controls"></div>}
    </div>
  );
};
