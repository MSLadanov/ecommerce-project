import { ElementType, useState } from "react";
import { createPortal } from "react-dom";

export const useModal = (ModalContent: ElementType) => {
  const [modalClassName, setModalClassName] = useState<"visible" | "hidden">("hidden");
  const openModal = () => {
    console.log('open')
    setModalClassName("visible");
  };
  const closeModal = () => {
    console.log('close')
    setModalClassName("hidden");
  };
  function Modal() {
    return (
      <dialog
        id="dialog"
        className={modalClassName}
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <p id="dialog-title">This is a dialog!</p>
        <ModalContent />
        <button onClick={closeModal} aria-label="Close Modal">
          Close Me
        </button>
      </dialog>
    );
  }
  const ModalPortal = createPortal(<Modal />, document.getElementById("modal-root"))
  return { openModal, closeModal, ModalPortal };
};
