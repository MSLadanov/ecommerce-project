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
  return <div>Slider</div>;
};
