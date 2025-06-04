import { ReactElement, ReactNode } from "react";
import './style.scss'

interface IFlexProps {
  children: ReactNode;
}

export const Flex: React.FC<IFlexProps> = ({ children }): ReactElement => {
  return <div className="flex-container">{children}</div>;
};
