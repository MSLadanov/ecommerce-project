import { ReactElement, useState } from "react";
import { Modal } from "@components/ui/Modal/Modal";
import { AuthModal } from "@components/AuthModal";
import { useNotify } from "@/hooks/useNotify";
import { Notify } from "../ui/Notify/Notify";

export const Header = (): ReactElement => {
  const [modalVisibility, setModalVisibility] = useState<true | false>(false);
  const { isNotifyShowed, toggleNotify } = useNotify({ delay: 8000 });
  return (
    <div>
      header
      <button onClick={() => setModalVisibility(true)}>Modal</button>
      <button onClick={() => toggleNotify()}>Notify</button>
      <Modal
        modalVisibility={modalVisibility}
        closeModal={() => setModalVisibility(false)}
      >
        <AuthModal />
      </Modal>
      <Notify notifyVisibility={isNotifyShowed} type="warning">
        <p>Hello</p>
      </Notify>
    </div>
  );
};
