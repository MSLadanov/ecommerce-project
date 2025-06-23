import { ReactElement, useState } from "react";
import { Modal } from "@components/ui/Modal/Modal";
import { AuthModal } from "@components/AuthModal";
import { useNotify } from "@hooks/useNotify";
import { Notify } from "@components/ui/Notify";

export const Header = (): ReactElement => {
  const [modalVisibility, setModalVisibility] = useState<true | false>(false);
  const { notifyRef, isNotifyShowed, notifyType, notifyText, toggleNotify } =
    useNotify({
      delay: 3000,
    });
  return (
    <div>
      header
      <button onClick={() => setModalVisibility(true)}>Modal</button>
      <button onClick={() => toggleNotify("success", "welcome")}>Notify</button>
      <Modal
        modalVisibility={modalVisibility}
        closeModal={() => setModalVisibility(false)}
      >
        <AuthModal />
      </Modal>
      <Notify
        ref={notifyRef}
        notifyVisibility={isNotifyShowed}
        notifyType={notifyType}
        notifyText={notifyText}
      />
    </div>
  );
};
