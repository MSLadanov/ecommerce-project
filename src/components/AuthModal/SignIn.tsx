import { FormEvent, ReactElement, useState } from "react";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";
import { useApi } from "@hooks/useApi";
import { TSignInResponse } from "@/types/Auth";

interface ISignInProps {
  switchToSignUp: () => void;
}

export const SignIn: React.FC<ISignInProps> = ({
  switchToSignUp,
}): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { post } = useApi();
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
    post<TSignInResponse>("AUTH", { email, password });
  };
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <Input
        id="email"
        type="text"
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
