import { useState, useEffect } from "react";

type TDelayProps = {
  children: React.ReactNode;
  waitBeforeShow?: number;
};

export const Delay = ({ children, waitBeforeShow = 500 }: TDelayProps) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? children : null;
};
