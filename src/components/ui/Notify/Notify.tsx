import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface INotifyProps {
  children: ReactNode;
  notifyVisibility: boolean;
  type: "error" | "warning" | "success";
}

export const Notify: React.FC<INotifyProps> = ({ children, notifyVisibility, type  }) => {
  function Notify() {
    return <dialog>{children}</dialog>;
  }
  createPortal(<Notify />, document.getElementById("notify-root"));
};
