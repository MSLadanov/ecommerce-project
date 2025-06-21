import { ElementType, useState } from "react";
import { createPortal } from "react-dom";

export const useModal = (ModalContent: ElementType) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const openModal = () => {
    setIsModalOpened(true);
  };
  const closeModal = () => {
    setIsModalOpened(false);
  };
  function Modal() {
    return (
      <dialog id="dialog" open aria-modal="true" aria-labelledby="dialog-title">
        <p id="dialog-title">This is a dialog!</p>
        <ModalContent />
        <button onClick={closeModal} aria-label="Close Modal">
          Close Me
        </button>
      </dialog>
    );
  }
  const ModalPortal = isModalOpened
    ? createPortal(<Modal />, document.getElementById("modal-root"))
    : null;
  return { openModal, closeModal, ModalPortal };
};
