import { ReactElement } from "react";
import { useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import "./style.scss";

type TModalType = "signIn" | "signUp";

interface IAuthModalProps {
  closeModal: () => void;
}

export const AuthModal: React.FC<IAuthModalProps> = ({
  closeModal,
}): ReactElement => {
  const [authModalType, setAuthModalType] = useState<TModalType>("signIn");
  const handleModalTypeChange = (modalType: TModalType) => {
    setAuthModalType(modalType);
  };
  if (authModalType === "signIn") {
    return (
      <SignIn
        switchToSignUp={() => handleModalTypeChange("signUp")}
        closeModal={closeModal}
      />
    );
  }
  return (
    <SignUp
      switchToSignIn={() => handleModalTypeChange("signIn")}
      closeModal={closeModal}
    />
  );
};
