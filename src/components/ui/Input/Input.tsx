import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import "./style.scss";

type TInputTypes = "text" | "email" | "password" | "tel" | "number";

type TValueTypes = string | number;

interface IInputProps {
  id: string;
  type: TInputTypes;
  label?: string;
  value: TValueTypes;
  setValue: Dispatch<SetStateAction<string | number>>;
  required?: boolean;
  className?: string;
  onFocusAction?: () => void;
  onBlurAction?: () => void;
}

export const Input: React.FC<IInputProps> = ({
  id,
  type,
  label = "",
  value,
  setValue,
  required = false,
  className = "",
  onFocusAction,
  onBlurAction,
}): ReactElement => {
  const [isOnFocused, setIsOnFocused] = useState(false);
  const handleChange = (changedValue: string) => {
    setValue(changedValue);
  };
  return (
    <div className={`input-field ${isOnFocused ? "focused " : ""}` + className}>
      <label className={`${isOnFocused ? "focused" : ""}`} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        autoComplete=""
        required={required}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => {
          setIsOnFocused(true);
          onFocusAction();
        }}
        onBlur={() => {
          setIsOnFocused(false);
          onBlurAction();
        }}
      />
    </div>
  );
};
