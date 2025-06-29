import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "@hooks/useOutsideClick";
import { Button } from "@components/ui/Button";
import "./style.scss";

interface IModalProps {
  className: string;
  children: ReactNode;
  modalVisibility: boolean;
  closeModal: () => void;
}

export const Modal: React.FC<IModalProps> = ({
  className,
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
      <dialog
        ref={ref}
        aria-modal="true"
        aria-labelledby="dialog-title"
        className={className}
      >
        {children}
        <Button
          onClickAction={() => {
            ref.current.close();
            closeModal();
          }}
          aria-label="Close Modal"
        >
          Close Me
        </Button>
      </dialog>
    );
  }
  return createPortal(<Modal />, document.getElementById("modal-root"));
};
