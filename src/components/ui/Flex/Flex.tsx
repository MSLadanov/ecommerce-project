import { ReactElement, ReactNode } from "react";
import './style.scss'

interface IFlexProps {
  children: ReactNode;
  maxColumns: 6 | 4 | 2
}

export const Flex: React.FC<IFlexProps> = ({ children, maxColumns }): ReactElement => {
  return <div className={`flex-container cols${maxColumns}`}>{children}</div>;
};
