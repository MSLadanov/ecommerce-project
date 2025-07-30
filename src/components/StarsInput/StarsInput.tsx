import { ReactElement, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.scss";

interface IStarProps {
  color: string;
  size?: number;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
}

const Star: React.FC<IStarProps> = ({
  color,
  size = 20,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}): ReactElement => {
  return (
    <FaStar
      size={size}
      color={color}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={0}
      aria-label="Rate star"
      className="star-icon"
    />
  );
};

export const StarsInput = ({ rating, setRating }): ReactElement => {
  const [hover, setHover] = useState(0);
  const [focus, setFocus] = useState(0);

  const starValues = [1, 2, 3, 4, 5];

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  const handleStarHover = (value: number) => {
    setHover(value);
  };

  const handleStarFocus = (value: number) => {
    setFocus(value);
  };

  const resetHover = () => {
    setHover(0);
  };

  const resetFocus = () => {
    setFocus(0);
  };

  const getStarColor = (starValue: number) => {
    const activeValue = focus || hover || rating;

    if (starValue <= activeValue) {
      return "#ffc107";
    }
    return "#e4e5e9";
  };

  return (
    <div className="stars-input" aria-label="Rating" role="radiogroup">
      {starValues.map((value) => (
        <Star
          key={value}
          color={getStarColor(value)}
          size={20}
          onClick={() => handleStarClick(value)}
          onMouseEnter={() => handleStarHover(value)}
          onMouseLeave={resetHover}
          onFocus={() => handleStarFocus(value)}
          onBlur={resetFocus}
        />
      ))}
      <div className="sr-only" aria-live="polite">
        {rating ? `Rating: ${rating} out of 5` : "No rating selected"}
      </div>
    </div>
  );
};
