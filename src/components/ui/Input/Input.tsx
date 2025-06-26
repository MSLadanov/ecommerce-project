import { Dispatch, ReactElement, SetStateAction } from "react";
import "./style.scss";

type TInputTypes = "text" | "email" | "password" | "tel" | "number";

type TValueTypes = string | number;

interface IInputProps {
  id: string;
  type: TInputTypes;
  label: string;
  value: TValueTypes;
  setValue: Dispatch<SetStateAction<string | number>>;
}

export const Input: React.FC<IInputProps> = ({
  id,
  type,
  label = "",
  value,
  setValue,
}): ReactElement => {
  const handleChange = (changedValue: string) => {
    setValue(changedValue);
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
