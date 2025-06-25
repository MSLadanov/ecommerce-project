import { ReactElement } from "react";
import { useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import "./style.scss";

type TModalType = "signIn" | "signUp";

export const AuthModal = (): ReactElement => {
  const [authModalType, setAuthModalType] = useState<TModalType>("signIn");
  const handleModalTypeChange = (modalType: TModalType) => {
    setAuthModalType(modalType);
  };
  if (authModalType === "signIn") {
    return <SignIn switchToSignUp={() => handleModalTypeChange("signUp")} />;
  }
  return <SignUp switchToSignIn={() => handleModalTypeChange("signIn")} />;
};
