import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface IButtonProps {
  children: ReactNode;
  onClickAction?: () => void;
  type?: "submit" | "reset" | "button";
  styleGuide?: "ozon" | "wb" | "";
  orientation?: "vertical" | "horizontal";
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClickAction,
  type = "button",
  styleGuide = "",
  orientation = "horizontal",
  disabled = false,
}): ReactElement => {
  return (
    <button
      type={type}
      className={styleGuide + " " + orientation}
      onClick={() => {
        onClickAction()
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
