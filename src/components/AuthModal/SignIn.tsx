import { FormEvent, ReactElement, useState } from "react";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";
import { useApi } from "@hooks/useApi";
import { TSignInResponse } from "@/types/Auth";
import { useNotify } from "@/hooks/useNotify";
import { Notify } from "@components/ui/Notify";

interface ISignInProps {
  switchToSignUp: () => void;
}

export const SignIn: React.FC<ISignInProps> = ({
  switchToSignUp,
}): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { post } = useApi();
  const { notifyRef, isNotifyShowed, notifyType, notifyText, toggleNotify } =
    useNotify({ delay: 3000 });
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
    post<TSignInResponse>("AUTH", { email, password }, toggleNotify);
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
      <Notify
        ref={notifyRef}
        notifyVisibility={isNotifyShowed}
        notifyType={notifyType}
        notifyText={notifyText}
      />
    </form>
  );
};
