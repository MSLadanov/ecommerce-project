import { FormEvent, ReactElement, useContext, useState } from "react";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";
import { useApi } from "@hooks/useApi";
import { TSignInResponse } from "@/types/Auth";
import { useCookies } from "react-cookie";
import { NotifyContext } from "@/contexts/NotifyContext";

interface ISignInProps {
  switchToSignUp: () => void;
  closeModal: () => void;
}

export const SignIn: React.FC<ISignInProps> = ({
  switchToSignUp,
  closeModal,
}): ReactElement => {
  const { toggleNotify } = useContext(NotifyContext);
  const [, setCookie] = useCookies(["authToken"]);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { post } = useApi();
  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await post<TSignInResponse>("AUTH", { username, password });
    if (data.accessToken) {
      setCookie("authToken", data.accessToken);
      toggleNotify("success", "You have successfully logged in!");
      closeModal();
    } else {
      toggleNotify("error", data);
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
      <Button styleGuide="ozon" type="submit">
        Sign In
      </Button>
      {/* <Button onClickAction={() => switchToSignUp()}>Sign Up</Button> */}
    </form>
  );
};
