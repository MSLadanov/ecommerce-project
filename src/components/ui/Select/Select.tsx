import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
  useRef,
  useEffect,
} from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
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
  const selectRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpenSelect(false);
      }
    };
    if (openSelect) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSelect]);

  return (
    <div className="select-box" ref={selectRef}>
      <div className="select-button" onClick={() => setOpenSelect(!openSelect)}>
        {!selectedOption ? text : selectedOption}
        {openSelect ? <FaArrowUp /> : <FaArrowDown />}
      </div>
      {openSelect && (
        <div className="select-options open">
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
      )}
    </div>
  );
};
