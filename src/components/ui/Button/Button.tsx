import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface IButtonProps {
  children: ReactNode;
  onClickAction: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClickAction,
}): ReactElement => {
  return <button onClick={() => onClickAction()}>{children}</button>;
};
