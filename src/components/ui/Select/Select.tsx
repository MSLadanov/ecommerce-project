import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { useOutsideClick } from "@hooks/useOutsideClick";
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
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(
    () => setOpenSelect(false),
    openSelect
  );
  return (
    <div className="select-box">
      <div className="select-button" onClick={() => setOpenSelect(true)}>
        {!selectedOption ? text : selectedOption}
      </div>
      <div
        ref={ref}
        className={openSelect ? "select-options open" : "select-options"}
      >
        {options.map((option) => (
          <div
            className="select-option"
            key={option.id}
            onClick={() => {
              onChangeAction(option.value);
              setSelectedOption(option.title);
              setOpenSelect(false);
            }}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};
