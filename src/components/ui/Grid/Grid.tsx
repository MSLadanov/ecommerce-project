import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface IGridProps {
  children: ReactNode;
}

export const Grid: React.FC<IGridProps> = ({ children }): ReactElement => {
  return <div className="grid-container">{children}</div>;
};
