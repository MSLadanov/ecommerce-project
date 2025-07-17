import { ReactElement } from "react";
import "./style.scss";

interface IOption {
  id: number;
  value: string;
  title: string;
  selected?: boolean;
  disabled?: boolean;
}

interface ISelectProps {
  name: string;
  options: IOption[];
  required?: boolean;
  onChangeAction: (value: string) => void;
}

export const Select: React.FC<ISelectProps> = ({
  name,
  options,
  required = false,
  onChangeAction,
}): ReactElement => {
  return (
    <select
      name={name}
      required={required}
      onChange={(e) => onChangeAction(e.target.value)}
    >
      {options.map((option) => (
        <option
          key={option.id}
          value={option.value}
          selected={option.selected}
          disabled={option.disabled}
        >
          {option.title}
        </option>
      ))}
    </select>
  );
};
