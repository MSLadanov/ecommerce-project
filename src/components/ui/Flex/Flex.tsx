import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface IFlexProps {
  children: ReactNode;
  flexDirection?: "column" | "row" | "column-reverse" | "row-reverse";
  justifyContent?:
    | "space-between"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "right"
    | "left"
    | "space-around"
    | "space-evenly";
  alignItems?:
    | "align-center"
    | "align-stretch"
    | "align-start"
    | "align-flex-start"
    | "align-end"
    | "align-flex-end"
    | "align-baseline";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  className?: string;
}

export const Flex: React.FC<IFlexProps> = ({
  children,
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "align-stretch",
  wrap = "nowrap",
  className,
}): ReactElement => {
  return (
    <div
      className={`${className} flex-container ${flexDirection} ${justifyContent} ${alignItems} ${wrap}`}
    >
      {children}
    </div>
  );
};
