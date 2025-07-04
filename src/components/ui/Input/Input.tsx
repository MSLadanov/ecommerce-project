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
  required?: boolean;
}

export const Input: React.FC<IInputProps> = ({
  id,
  type,
  label = "",
  value,
  setValue,
  required = false,
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
        autoComplete=""
        required={required}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
