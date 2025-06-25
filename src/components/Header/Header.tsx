import { ReactElement, useState } from "react";
import { Modal } from "@components/ui/Modal/Modal";
import { AuthModal } from "@components/AuthModal";
import logo from "@assets/logo.png";
import { Button } from "@components/ui/Button";
import "./style.scss";

export const Header = (): ReactElement => {
  const [authModalVisibility, setAuthModalVisibility] = useState<true | false>(
    false
  );
  return (
    <header>
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <Button onClickAction={() => setAuthModalVisibility(true)}>
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
