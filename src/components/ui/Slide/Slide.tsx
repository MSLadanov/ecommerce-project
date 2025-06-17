import { PropsWithChildren, ReactElement } from "react";
import "./style.scss";

export const Slide: React.FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return <div>{children}</div>;
};
