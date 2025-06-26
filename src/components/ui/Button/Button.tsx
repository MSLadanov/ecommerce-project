import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface IButtonProps {
  children: ReactNode;
  onClickAction?: () => void;
  type?: "submit" | "reset" | "button";
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClickAction = () => {},
  type = "button",
}): ReactElement => {
  return (
    <button type={type} onClick={() => onClickAction()}>
      {children}
    </button>
  );
};
