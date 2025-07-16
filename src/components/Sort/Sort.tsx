import { ReactElement, ReactNode } from "react";
import { Select } from "@components/ui/Select";

interface ISortProps {
    children: ReactNode[]
}

export const Sort : React.FC<ISortProps> = ({children}) : ReactElement => {
    return <Select>
        {children}
    </Select> 
}