import { FormEvent, ReactElement, useState } from "react";
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
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <Input
        id="email"
        type="email"
        label="email"
        value={email}
        setValue={setEmail}
      />
      <Input
        id="password"
        type="password"
        label="password"
        value={password}
        setValue={setPassword}
      />
      <Button type="submit">Sign In</Button>
      <p onClick={() => switchToSignUp()}>Sign Up</p>
    </form>
  );
};
