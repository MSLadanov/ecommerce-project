import { ReactElement } from "react";
import { Modal } from "@components/ui/Modal/Modal";
import { AuthModal } from "@components/AuthModal";

export const Header = (): ReactElement => {
  return (
    <div>
      header
      <button>Modal</button>
      <Modal>
        <AuthModal />
      </Modal>
    </div>
  );
};
