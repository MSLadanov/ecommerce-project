import { ReactElement, useState } from "react";
import { Modal } from "@components/ui/Modal/Modal";
import { AuthModal } from "@components/AuthModal";
import { Button } from "@components/ui/Button";
import { GoSignIn } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretSquareDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { ProductCategories } from "@components/ProductCategories";
import { useNavigate } from "react-router";
import { CartCountBadge } from "@components/CartCountBadge";
import { useAuth } from "@hooks/useAuth";
import "./style.scss";

export const Header = (): ReactElement => {
  const { isAuth, clearAuth } = useAuth();
  const navigate = useNavigate();
  const [authModalVisibility, setAuthModalVisibility] = useState<true | false>(
    false
  );
  const [catalogueModalVisibility, setCatalogueModalVisibility] = useState<
    true | false
  >(false);
  return (
    <header>
      <div className="header__logo">
        <p>W-BOZONE</p>
      </div>
      <nav>
        <Button
          orientation="vertical"
          onClickAction={() => setCatalogueModalVisibility(true)}
        >
          <FaCaretSquareDown />
          Catalogue
        </Button>
        <Button orientation="vertical" onClickAction={() => navigate("/cart")}>
          <CartCountBadge />
          <FaShoppingCart />
          Cart
        </Button>
        {isAuth ? (
          <>
            <Button
              orientation="vertical"
              onClickAction={() => navigate("/user")}
            >
              <FaUserCircle />
              Account
            </Button>
            <Button onClickAction={() => clearAuth()} orientation="vertical">
              <GoSignOut />
              Sign Out
            </Button>
          </>
        ) : (
          <Button
            onClickAction={() => setAuthModalVisibility(true)}
            orientation="vertical"
          >
            <GoSignIn />
            Sign In
          </Button>
        )}
      </nav>
      <Modal
        className="auth__modal"
        modalVisibility={authModalVisibility}
        closeModal={() => setAuthModalVisibility(false)}
      >
        <AuthModal closeModal={() => setAuthModalVisibility(false)} />
      </Modal>
      <Modal
        className="catalogue__modal"
        modalVisibility={catalogueModalVisibility}
        closeModal={() => setCatalogueModalVisibility(false)}
        isInsideClickClosing={true}
      >
        <ProductCategories />
      </Modal>
    </header>
  );
};
