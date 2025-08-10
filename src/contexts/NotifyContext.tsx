import { createContext } from "react";

type NotifyType = "error" | "warning" | "success";

interface INotifyContextType {
    toggleNotify: (type: NotifyType, text: string) => void;
}

export const NotifyContext = createContext<INotifyContextType>({
    toggleNotify: () => {}
})