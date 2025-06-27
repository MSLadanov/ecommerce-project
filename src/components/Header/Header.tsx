import { ReactElement, useState } from "react";
import { Modal } from "@components/ui/Modal/Modal";
import { AuthModal } from "@components/AuthModal";
import { Button } from "@components/ui/Button";
import { GoSignIn } from "react-icons/go";
import "./style.scss";

export const Header = (): ReactElement => {
  const [authModalVisibility, setAuthModalVisibility] = useState<true | false>(
    false
  );
  return (
    <header>
      <div className="header__logo">
        <p>W-BOZONE</p>
      </div>
      <nav>
        <Button onClickAction={() => setAuthModalVisibility(true)} orientation='vertical'>
          <GoSignIn />
          Sign In
        </Button>
      </nav>
      <Modal
        modalVisibility={authModalVisibility}
        closeModal={() => setAuthModalVisibility(false)}
      >
        <AuthModal />
      </Modal>
    </header>
  );
};
