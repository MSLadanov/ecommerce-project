import { ReactElement, useState } from "react";
import { Modal } from "@components/ui/Modal/Modal";
import { AuthModal } from "@components/AuthModal";

export const Header = (): ReactElement => {
  const [modalVisibility, setModalVisibility] = useState<true | false>(
    false
  );
  return (
    <div>
      header
      <button onClick={() => setModalVisibility(true)}>Modal</button>
      <Modal
        modalVisibility={modalVisibility}
      >
        <AuthModal />
      </Modal>
    </div>
  );
};
