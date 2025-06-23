import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface INotifyProps {
  children: ReactNode;
  notifyVisibility: boolean;
  type: "error" | "warning" | "success";
}

export const Notify: React.FC<INotifyProps> = ({
  children,
  notifyVisibility,
  type,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && notifyVisibility) {
      ref.current.classList.toggle('visible')
    }
  }, [notifyVisibility, ref]);
  function Notify() {
    return (
      <div
        ref={ref}
        className={'notify__' + type}
      >
        {children}
      </div>
    );
  }
  return createPortal(<Notify />, document.getElementById("notify-root"));
};
