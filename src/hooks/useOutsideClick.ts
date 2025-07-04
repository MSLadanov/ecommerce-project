import { useEffect, useRef } from "react";

export const useOutsideClick = <T extends HTMLElement = HTMLDialogElement>(
  callback: () => void,
  isOpened: boolean,
  isInsideClickClosing: boolean = false
) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!isOpened || typeof callback !== "function") return;
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || !document.contains(ref.current)) {
        return;
      }
      const target = event.target as Node;
      if (ref.current === event.target) {
        callback();
        return;
      }
      if (isInsideClickClosing && !ref.current.contains(target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [callback, isOpened, isInsideClickClosing]);

  return ref;
};
