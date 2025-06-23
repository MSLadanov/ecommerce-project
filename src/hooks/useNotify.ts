import { useEffect, useState } from "react";

interface IUseNotifyProps {
  delay: number;
}

export const useNotify = ({ delay }: IUseNotifyProps) => {
  const [isNotifyShowed, setIsNotifyShowed] = useState(false);
  const toggleNotify = () => {
    setIsNotifyShowed(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsNotifyShowed(false);
    }, delay);
  }, [delay, isNotifyShowed]);
  return { isNotifyShowed, toggleNotify };
};
