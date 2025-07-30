import { ReactElement, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.scss";

interface IStarProps {
  value: number
  onClick: () => void
  onFocus: () => void
  onBlur: () => void
}

const Star : React.FC<IStarProps> = ({value, onClick, onFocus, onBlur}): ReactElement => {
  return (
    <FaStar
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export const StarsInput = (): ReactElement => {
  const [currentRate, setCurrentRate] = useState(0);
  const [currentFocus, setCurrentFocus] = useState(0)
  const starValues = [1, 2, 3, 4, 5];
  const handleStarClick = (value: number) => {
    console.log(value)
  }
  const handleStarFocus = (value: number) => {
    setCurrentFocus(value)
  }
  const handleStarBlur = () => {
    setCurrentFocus(0)
  }
  return (
    <div className="stars-input">
      {starValues.map((value, index) => (
        <Star
          key={index}
          value={value}
          onClick={() => handleStarClick(value)}
          onFocus={() => handleStarFocus(value)}
          onBlur={() => handleStarBlur()}
        />
      ))}
    </div>
  );
};
