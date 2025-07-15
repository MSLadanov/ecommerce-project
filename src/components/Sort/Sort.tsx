import { ReactElement } from "react";
import { Select } from "@components/ui/Select";

interface ISortProps {
    options: string
}

export const Sort : React.FC<ISortProps> = ({options}) : ReactElement => {
    return <Select>
        {options}
    </Select> 
}