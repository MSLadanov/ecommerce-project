import { ReactElement } from "react";

interface ISignInProps {
  switchToSignUp: () => void;
}

export const SignIn: React.FC<ISignInProps> = ({
  switchToSignUp,
}): ReactElement => {
  return (
    <div>
      Sign In
      <p onClick={() => switchToSignUp()}>SignUp</p>
    </div>
  );
};
