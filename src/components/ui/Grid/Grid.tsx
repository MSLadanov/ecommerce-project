import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface IGridProps {
  children: ReactNode;
  size: "xs" | "md" | "lg";
}

export const Grid: React.FC<IGridProps> = ({
  children,
  size,
}): ReactElement => {
  return <div className={`grid-container ${size}`}>{children}</div>;
};
