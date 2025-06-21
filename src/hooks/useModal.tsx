import { ElementType, useState } from "react";
import { createPortal } from "react-dom";

export const useModal = (ModalContent: ElementType) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const Modal = () => {
    return (
      <div className="modal">
        <div className="modal__header">
          <button onClick={() => setIsModalOpened(false)}></button>
        </div>
        <div className="modal__body">
          <ModalContent />
        </div>
      </div>
    );
  };
  const modalRoot = document.querySelector("#modal-root");
  createPortal(<Modal />, modalRoot);
};
