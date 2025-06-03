import { PropsWithChildren, ReactElement } from "react";
import "./style.scss";

export const Grid = ({ children }: PropsWithChildren): ReactElement => {
  return <div className="grid-container">{children}</div>;
};
