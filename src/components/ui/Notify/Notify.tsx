import { RefObject, useEffect } from "react";
import { createPortal } from "react-dom";

interface INotifyProps {
  notifyVisibility: boolean;
  ref: RefObject<HTMLDivElement>;
  notifyType: "error" | "warning" | "success";
  notifyText: string;
}

export const Notify: React.FC<INotifyProps> = ({
  notifyVisibility,
  ref,
  notifyType,
  notifyText,
}) => {
  useEffect(() => {
    if (ref.current && notifyVisibility) {
      ref.current.classList.toggle("visible");
    }
  }, [notifyVisibility, ref]);
  function Notify() {
    return (
      <div
        ref={ref}
        className={`notify ${notifyType ? `notify__${notifyType}` : ""}`}
      >
        {notifyText}
      </div>
    );
  }
  return createPortal(<Notify />, document.getElementById("notify-root"));
};
