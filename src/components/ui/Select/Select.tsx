import { ReactElement } from "react";
import "./style.scss";

interface IOption {
  id: number;
  value: string;
  title: string;
  selected: boolean;
}

interface ISelectProps {
  name: string;
  options: IOption[];
  required: boolean;
  onChangeAction: (value: string) => void;
}

export const Select: React.FC<ISelectProps> = ({
  name,
  options,
  required,
  onChangeAction,
}): ReactElement => {
  return (
    <select
      name={name}
      required={required}
      onChange={(e) => onChangeAction(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.id} value={option.value} selected={option.selected}>
          {option.title}
        </option>
      ))}
    </select>
  );
};
