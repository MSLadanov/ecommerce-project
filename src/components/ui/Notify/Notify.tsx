import { RefObject, useEffect } from "react";
import { createPortal } from "react-dom";
import { MdError } from "react-icons/md";
import { MdWarning } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import "./style.scss";

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
  const notifyIcons = {
    error: <MdError />,
    warning: <MdWarning />,
    success: <MdCheckCircle />,
  };
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
        {notifyIcons[notifyType]}
        {notifyText}
      </div>
    );
  }
  return createPortal(<Notify />, document.getElementById("notify-root"));
};
