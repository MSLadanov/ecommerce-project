import { ReactElement, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.scss";

const Star = ({
  value,
  rate,
  setRate,
}: {
  value: number;
  rate: number;
  setRate: (newRate: number) => void;
}): ReactElement => {
  return (
    <FaStar
      onClick={() => setRate(value)}
      color={rate <= value && rate !== 0 ? "yellow" : "black"}
    />
  );
};

export const StarsInput = (): ReactElement => {
  const [currentRate, setCurrentRate] = useState(0);
  const starValues = [1, 2, 3, 4, 5];
  return (
    <div className="stars-input">
      {starValues.map((value, index) => (
        <Star
          value={value}
          key={index}
          rate={currentRate}
          setRate={() => setCurrentRate}
        />
      ))}
    </div>
  );
};
