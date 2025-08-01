import { ReactElement } from "react";
import './style.scss';

interface LoaderProps {
  color?: string;        
  secondaryColor?: string;
}

export const Loader = ({
  color = '#7c1af8',
  secondaryColor = 'rgba(124, 26, 248, 0.2)'
}: LoaderProps): ReactElement => {
  return (
    <div className="circle-loader">
      <div 
        className="circle-loader__spinner"
        style={{
          borderColor: secondaryColor,
          borderTopColor: color
        }}
      />
    </div>
  );
};