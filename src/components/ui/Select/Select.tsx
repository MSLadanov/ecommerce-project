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
}

export const Select: React.FC<ISelectProps> = ({
  name,
  options,
  required,
}): ReactElement => {
  return (
    <select name={name} required={required}>
      {options.map((option) => (
        <option key={option.id} value={option.value} selected={option.selected}>
          {option.title}
        </option>
      ))}
    </select>
  );
};
