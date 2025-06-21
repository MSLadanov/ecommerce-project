import { ReactElement } from "react";
import { useModal } from "@hooks/useModal";
import { AuthModal } from "@components/AuthModal";

export const Header = (): ReactElement => {
  const { openModal, ModalPortal } = useModal(AuthModal);
  return (
    <div>
      header
      <button onClick={() => openModal()}>Modal</button>
      {ModalPortal}
    </div>
  );
};
