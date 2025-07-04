import { useEffect, useRef } from "react";

export const useOutsideClick = <T extends HTMLDialogElement>(
  callback: () => void,
  isOpened: boolean,
  isInsideClickClosing: boolean
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
    const handleClickInside = (event: MouseEvent | TouchEvent) => {
      if (
        ref.current &&
        document.contains(ref.current) &&
        ref.current !== event.target
      ) {
        console.log("inside");
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside, {
      passive: true,
    });
    if (isInsideClickClosing) {
      document.addEventListener("mouseup", handleClickInside);
      document.addEventListener("touchend", handleClickInside);
    }
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
      if (isInsideClickClosing) {
        document.removeEventListener("mouseup", handleClickInside);
        document.removeEventListener("touchend", handleClickInside);
      }
    };
  }, [callback, isInsideClickClosing, isOpened]);

  return ref;
};
