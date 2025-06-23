import { useEffect, useRef, useState } from "react";

interface UseNotifyParams {
  delay: number;
}

type NotifyType = "error" | "warning" | "success";

interface UseNotifyReturn {
  notifyRef: React.RefObject<HTMLDivElement>;
  isNotifyShowed: boolean;
  notifyType: NotifyType | null;
  notifyText: string | null;
  toggleNotify: (type: NotifyType, text: string) => void;
  hideNotify: () => void;
}

export const useNotify = ({ delay }: UseNotifyParams): UseNotifyReturn => {
  const notifyRef = useRef<HTMLDivElement>(null);
  const [isNotifyShowed, setIsNotifyShowed] = useState(false);
  const [notifyType, setNotifyType] = useState<NotifyType | null>(null);
  const [notifyText, setNotifyText] = useState<string | null>(null);

  const hideNotify = () => {
    setIsNotifyShowed(false);
    setNotifyType(null);
    setNotifyText(null);
  };

  const toggleNotify = (type: NotifyType, text: string) => {
    setNotifyType(type);
    setNotifyText(text);
    setIsNotifyShowed(true);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isNotifyShowed) {
      timeoutId = setTimeout(() => {
        hideNotify();
      }, delay);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isNotifyShowed, delay]);

  return {
    notifyRef,
    isNotifyShowed,
    notifyType,
    notifyText,
    toggleNotify,
    hideNotify,
  };
};