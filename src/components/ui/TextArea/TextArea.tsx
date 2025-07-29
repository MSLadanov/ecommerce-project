import { ReactElement } from "react"

interface TextAreaProps {
    id: string
    name: string
}

export const TextArea : React.FC<TextAreaProps> = ({id, name}) : ReactElement => {
    return <div className="text-field">
        <label htmlFor={id}></label>
        <textarea name={name} id={id}></textarea>
    </div>
}