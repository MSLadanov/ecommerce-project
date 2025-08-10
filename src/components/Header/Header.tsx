import { ReactElement, useContext, useState } from "react";
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
import { Search } from "@components/Search";
import { useSearch } from "@hooks/useSearch";
import { NotifyContext } from "@/contexts/NotifyContext";
import "./style.scss";

export const Header = (): ReactElement => {
  const { isAuth, clearAuth } = useAuth();
  const { toggleNotify } = useContext(NotifyContext);
  const navigate = useNavigate();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { search, setSearch } = useSearch((state) => state);
  const [authModalVisibility, setAuthModalVisibility] = useState<true | false>(
    false
  );
  const [catalogueModalVisibility, setCatalogueModalVisibility] = useState<
    true | false
  >(false);
  return (
    <header>
      <div
        className={
          isSearchFocused
            ? `header__logo-search focused`
            : `header__logo-search`
        }
      >
        <div className="header__logo" onClick={() => navigate("/products")}>
          <p>W-BOZONE</p>
        </div>
        <Search
          search={search}
          setSearch={setSearch}
          onFocusAction={() => setIsSearchFocused(true)}
          onBlurAction={() => !search && setIsSearchFocused(false)}
        />
      </div>

      <nav className={isSearchFocused ? "hide" : ""}>
        <Button
          orientation="vertical"
          onClickAction={() => setCatalogueModalVisibility(true)}
        >
          <FaCaretSquareDown />
          <p>Catalogue</p>
        </Button>
        <Button orientation="vertical" onClickAction={() => navigate("/cart")}>
          <CartCountBadge />
          <FaShoppingCart />
          <p>Cart</p>
        </Button>
        {isAuth ? (
          <>
            <Button
              orientation="vertical"
              onClickAction={() => navigate("/user")}
            >
              <FaUserCircle />
              <p>Account</p>
            </Button>
            <Button
              onClickAction={() => {
                toggleNotify("success", "You have successfully logged out!");
                clearAuth();
              }}
              orientation="vertical"
            >
              <GoSignOut />
              <p>Sign Out</p>
            </Button>
          </>
        ) : (
          <Button
            onClickAction={() => setAuthModalVisibility(true)}
            orientation="vertical"
          >
            <GoSignIn />
            <p>Sign In</p>
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
