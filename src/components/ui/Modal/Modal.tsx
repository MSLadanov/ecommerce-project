import { ReactNode } from "react";
import { createPortal } from "react-dom";

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
    return (
      <dialog
        open={modalVisibility}
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <p id="dialog-title">This is a dialog!</p>
        {children}
        <button onClick={closeModal} aria-label="Close Modal">
          Close Me
        </button>
      </dialog>
    );
  }
  return createPortal(<Modal />, document.getElementById("modal-root"));
};
