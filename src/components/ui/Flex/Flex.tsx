import { ReactElement, ReactNode } from "react";
import './style.scss'

interface IFlexProps {
  children: ReactNode;
  flexDirection: 'column' | 'row';
  justifyContent: 'space-between' | 'center';
  alignItems: 'center';
}

export const Flex: React.FC<IFlexProps> = ({ children, flexDirection, alignItems }): ReactElement => {
  return <div className={`flex-container ${flexDirection} ${alignItems}`}>{children}</div>;
};
