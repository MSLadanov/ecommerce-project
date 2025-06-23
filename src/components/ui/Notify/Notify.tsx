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
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (ref.current && notifyVisibility) {
      ref.current.showModal();
    }
  }, [notifyVisibility, ref]);
  function Notify() {
    return (
      <dialog ref={ref} className={"notify__" + type}>
        {children}
      </dialog>
    );
  }
  return createPortal(<Notify />, document.getElementById("notify-root"));
};
