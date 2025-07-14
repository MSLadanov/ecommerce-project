import { ReactElement, ReactNode } from "react";
import './style.scss'

interface ISelectProps {
    children: ReactNode[]
}

export const Select : React.FC<ISelectProps> = ({children}) : ReactElement => {
    return <select>{children}</select>
}