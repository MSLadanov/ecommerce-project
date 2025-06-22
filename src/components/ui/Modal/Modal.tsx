import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import './style.scss'

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
    const ref = useRef(null);
    useEffect(() => {
      if (ref.current && modalVisibility) {
        ref.current.showModal();
      }
      return () => {
        ref.current?.close();
      };
    }, []);
    return (
      <dialog
        ref={ref}
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
