import { ReactElement } from "react";

interface ISignUpProps {
  switchToSignIn: () => void;
}

export const SignUp: React.FC<ISignUpProps> = ({
  switchToSignIn,
}): ReactElement => {
  return (
    <div>
      Sign Up
      <p onClick={() => switchToSignIn()}>Sign in</p>
    </div>
  );
};
