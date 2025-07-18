import { Dispatch, ReactElement, SetStateAction } from "react";
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
  onChangeAction: Dispatch<SetStateAction<string | number | object>>;
}

export const Select: React.FC<ISelectProps> = ({ options, onChangeAction }): ReactElement => {
  return (
    <div className="select-box">
      <div className="select-button"></div>
      <div className="select-options">
        {options.map((option) => (
          <div className="select-option" key={option.id} onClick={() => onChangeAction(option.value)}>
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};
