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
  text: string;
  options: IOption[];
  required?: boolean;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  onChangeAction: Dispatch<SetStateAction<string | number | object>>;
}

export const Select: React.FC<ISelectProps> = ({
  text,
  options,
  selectedOption,
  setSelectedOption,
  onChangeAction,
}): ReactElement => {
  return (
    <div className="select-box">
      <div className="select-button">
        {!selectedOption ? text : selectedOption}
      </div>
      <div className="select-options">
        {options.map((option) => (
          <div
            className="select-option"
            key={option.id}
            onClick={() => {
              onChangeAction(option.value);
              setSelectedOption(option.title);
            }}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};
