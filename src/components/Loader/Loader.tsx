import { ReactElement } from "react";
import './style.scss'

export const Loader = (): ReactElement => {
  return (
    <div className="circle-loader">
      <div className="circle-loader__spinner"></div>
    </div>
  );
};