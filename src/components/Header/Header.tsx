import { ReactElement, useState } from "react";
import { Modal } from "@components/ui/Modal/Modal";
import { AuthModal } from "@components/AuthModal";
import { Button } from "@components/ui/Button";
import { GoSignIn } from "react-icons/go";
import "./style.scss";
import { FaShoppingCart } from "react-icons/fa";

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
        <Button orientation="vertical">
          <FaShoppingCart />
          Cart
        </Button>
        <Button
          onClickAction={() => setAuthModalVisibility(true)}
          orientation="vertical"
        >
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
