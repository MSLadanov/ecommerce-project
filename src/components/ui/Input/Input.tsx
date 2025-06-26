import { ReactElement } from "react";
import "./style.scss";

type TInputTypes = "text" | "email" | "password" | "tel" | "number";

interface IInputProps {
  id: string;
  type: TInputTypes;
  label: string;
  changeHandler: (value: string | number) => void;
}

export const Input: React.FC<IInputProps> = ({
  id,
  type,
  label = "",
  changeHandler,
}): ReactElement => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        onChange={(e) => changeHandler(e.target.value)}
      />
    </div>
  );
};
