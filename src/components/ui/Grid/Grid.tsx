import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface IGridProps {
  children: ReactNode;
  className?: string;
  size: "xs" | "md" | "lg";
}

export const Grid: React.FC<IGridProps> = ({
  children,
  className,
  size,
}): ReactElement => {
  return <div className={`grid-container ${size} ${className}`}>{children}</div>;
};
