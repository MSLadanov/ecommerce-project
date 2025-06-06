import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface IFlexProps {
  children: ReactNode;
  flexDirection: "column" | "row" | "column-reverse" | "row-reverse";
  justifyContent:
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
  alignItems:
    | "center"
    | "stretch"
    | "start"
    | "flex-start"
    | "end"
    | "flex-end"
    | "baseline";
}

export const Flex: React.FC<IFlexProps> = ({
  children,
  flexDirection,
  alignItems,
}): ReactElement => {
  return (
    <div className={`flex-container ${flexDirection} ${alignItems}`}>
      {children}
    </div>
  );
};
