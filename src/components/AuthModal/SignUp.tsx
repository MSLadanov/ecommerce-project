import { ReactElement } from "react";

interface ISignUpProps {
    switchToSignIn: () => void
}

export const SignUp : React.FC<ISignUpProps> = (): ReactElement => {
  return <div>Sign Up</div>;
};
