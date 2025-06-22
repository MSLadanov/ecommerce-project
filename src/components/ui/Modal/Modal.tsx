import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import "./style.scss";
import { useOutsideClick } from "@/hooks/useOutSideClick";

interface IModalProps {
  children: ReactNode;
  modalVisibility: boolean;
}

export const Modal: React.FC<IModalProps> = ({ children, modalVisibility }) => {
  function Modal() {
    const ref = useOutsideClick<HTMLDialogElement>(() => {
      ref.current.close();
    }, modalVisibility);
    useEffect(() => {
      if (ref.current && modalVisibility) {
        ref.current.showModal();
      }
    }, [ref]);
    return (
      <dialog ref={ref} aria-modal="true" aria-labelledby="dialog-title">
        <p id="dialog-title">This is a dialog!</p>
        {children}
        <button onClick={() => ref.current.close()} aria-label="Close Modal">
          Close Me
        </button>
      </dialog>
    );
  }
  return createPortal(<Modal />, document.getElementById("modal-root"));
};
