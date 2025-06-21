import { ReactElement, useState } from "react";
import { Modal } from "@components/ui/Modal/Modal";
import { AuthModal } from "@components/AuthModal";

export const Header = (): ReactElement => {
  const [modalVisibility, setModalVisibility] = useState<"visible" | "hidden">(
    "hidden"
  );
  return (
    <div>
      header
      <button onClick={() => setModalVisibility('visible')}>Modal</button>
      <Modal
        modalVisibility={modalVisibility}
        closeModal={() => setModalVisibility("hidden")}
      >
        <AuthModal />
      </Modal>
    </div>
  );
};
