import { ElementType, ReactElement, useState } from "react";
import { createPortal } from "react-dom";

export const useModal = (ModalContent: ElementType) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const openModal = () => {
    setIsModalOpened(true);
  };
  const closeModal = () => {
    setIsModalOpened(false);
  };
  function Modal(): ReactElement {
    return (
      <div className="modal">
        <div className="modal__header">
          <button onClick={() => closeModal()}></button>
        </div>
        <div className="modal__body">
          <ModalContent />
        </div>
      </div>
    );
  }
  const modalRoot = document.querySelector("#modal-root");
  const ModalPortal =
    isModalOpened && modalRoot ? createPortal(<Modal />, modalRoot) : null;
  return [openModal, closeModal, ModalPortal];
};
