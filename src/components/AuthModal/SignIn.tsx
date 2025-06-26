import { ReactElement, useState } from "react";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";

interface ISignInProps {
  switchToSignUp: () => void;
}

export const SignIn: React.FC<ISignInProps> = ({
  switchToSignUp,
}): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <Input
        id="email"
        type="email"
        label="email"
        changeHandler={() => setEmail(email)}
      />
      <Input
        id="password"
        type="password"
        label="password"
        changeHandler={() => setPassword(password)}
      />
      <Button type="submit">Sign In</Button>
      <p onClick={() => switchToSignUp()}>Sign Up</p>
    </form>
  );
};
