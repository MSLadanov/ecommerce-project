import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface IButtonProps {
  children: ReactNode;
  onClickAction?: () => void;
  type?: "submit" | "reset" | "button";
  styleGuide: 'ozon' | 'wb' | ''
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClickAction = () => {},
  type = "button",
  styleGuide = ''
}): ReactElement => {
  return (
    <button type={type} className={styleGuide} onClick={() => onClickAction()}>
      {children}
    </button>
  );
};
