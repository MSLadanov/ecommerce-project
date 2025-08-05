import { FormEvent, ReactElement, useState } from "react";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";
import { useApi } from "@hooks/useApi";
import { TSignInResponse } from "@/types/Auth";
import { useNotify } from "@/hooks/useNotify";
import { Notify } from "@components/ui/Notify";
import { useCookies } from "react-cookie";

interface ISignInProps {
  switchToSignUp: () => void;
  closeModal: () => void;
}

export const SignIn: React.FC<ISignInProps> = ({
  switchToSignUp,
  closeModal,
}): ReactElement => {
  const [, setCookie] = useCookies(["authToken"]);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { post } = useApi();
  const { notifyRef, isNotifyShowed, notifyType, notifyText, toggleNotify } =
    useNotify({ delay: 3000 });
  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await post<TSignInResponse>(
      "AUTH",
      { username, password },
      toggleNotify
    );
    if (data) {
      setCookie("authToken", data.accessToken);
      closeModal();
    }
  };
  return (
    <form className="sign-in-form" onSubmit={(e) => submitForm(e)}>
      <Input
        id="username"
        type="text"
        label="Username:"
        value={username}
        setValue={setUserName}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password:"
        value={password}
        setValue={setPassword}
        required
      />
      <p>*Username 'oliviaw', password 'oliviawpass' for example</p>
      <Button styleGuide="ozon" type="submit">Sign In</Button>
      {/* <Button onClickAction={() => switchToSignUp()}>Sign Up</Button> */}
      <Notify
        ref={notifyRef}
        notifyVisibility={isNotifyShowed}
        notifyType={notifyType}
        notifyText={notifyText}
      />
    </form>
  );
};
