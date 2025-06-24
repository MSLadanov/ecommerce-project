import { ReactElement, useState } from "react";
import { Modal } from "@components/ui/Modal/Modal";
import { AuthModal } from "@components/AuthModal";
import { useNotify } from "@hooks/useNotify";
import { Notify } from "@components/ui/Notify";
import { Button } from "@components/ui/Button";

export const Header = (): ReactElement => {
  const [modalVisibility, setModalVisibility] = useState<true | false>(false);
  const { notifyRef, isNotifyShowed, notifyType, notifyText, toggleNotify } =
    useNotify({
      delay: 3000,
    });
  return (
    <div>
      header
      <Button onClickAction={() => setModalVisibility(true)}>Modal</Button>
      <Button onClickAction={() => toggleNotify("success", "welcome")}>
        Notify success
      </Button>
      <Button onClickAction={() => toggleNotify("warning", "warning")}>
        Notify warning
      </Button>
      <Button onClickAction={() => toggleNotify("error", "error")}>
        Notify error
      </Button>
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
