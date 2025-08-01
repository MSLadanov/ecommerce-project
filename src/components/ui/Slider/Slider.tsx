import { ReactElement } from "react";
import { SliderControls } from "./SliderControls";
import { useSlider } from "@hooks/useSlider";
import "./style.scss";

interface ISliderProps {
  slidesData: {
    [key: string]: string | number;
  }[];
  withControls?: boolean;
  autoSlide?: boolean;
  slideDelay?: number;
}

const Slide = ({
  imageUrl,
  isActive,
}: {
  imageUrl: string;
  isActive: boolean;
}): ReactElement => {
  return (
    <div
      className={isActive ? "slide active" : "slide"}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="slide__title">hello</div>
    </div>
  );
};

export const Slider: React.FC<ISliderProps> = ({
  slidesData,
  withControls = true,
  autoSlide = false,
  slideDelay = 2000,
}): ReactElement => {
  const { currentSlide } = useSlider(slidesData.length - 1, true, slideDelay);
  return (
    <div className="slider">
      <div className="slider__frame">
        {slidesData.map((slideData, index) => (
          <Slide
            key={index}
            imageUrl={slideData.images[0]}
            isActive={currentSlide === index}
          />
        ))}
      </div>
      <SliderControls
        autoSlide={autoSlide}
        slideDelay={slideDelay}
        withControls={withControls}
        slidesCount={slidesData.length - 1}
      />
    </div>
  );
};
