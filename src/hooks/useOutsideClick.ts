import { useEffect, useRef } from "react";

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  callback: () => void,
  isOpened: boolean
) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (typeof callback !== "function") return;
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        ref.current &&
        document.contains(ref.current) &&
        ref.current === event.target &&
        isOpened
      ) {
        callback();
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside, {
      passive: true,
    });
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [callback, isOpened]);

  return ref;
};
