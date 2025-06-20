import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface ISlideProps {
  image?: string;
  title?: string;
  children?: ReactNode;
}

export const Slide: React.FC<ISlideProps> = ({
  children,
  image,
  title,
}): ReactElement => {
  return (
    <div className="slide offset-0">
      <img className="slide__image" src={image} />
      <p className="slide__title">{title}</p>
      {children}
    </div>
  );
};
