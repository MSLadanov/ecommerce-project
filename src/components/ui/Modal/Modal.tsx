import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "@hooks/useOutsideClick";
import "./style.scss";

interface IModalProps {
  children: ReactNode;
  modalVisibility: boolean;
  closeModal: () => void;
}

export const Modal: React.FC<IModalProps> = ({
  children,
  modalVisibility,
  closeModal,
}) => {
  function Modal() {
    const ref = useOutsideClick<HTMLDialogElement>(() => {
      ref.current.close();
      closeModal();
    }, modalVisibility);
    useEffect(() => {
      if (ref.current && modalVisibility) {
        ref.current.showModal();
      }
    }, [ref]);
    return (
      <dialog ref={ref} aria-modal="true" aria-labelledby="dialog-title">
        {children}
        <button
          onClick={() => {
            ref.current.close();
            closeModal();
          }}
          aria-label="Close Modal"
        >
          Close Me
        </button>
      </dialog>
    );
  }
  return createPortal(<Modal />, document.getElementById("modal-root"));
};
