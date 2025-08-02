import { Dispatch, ReactElement, SetStateAction } from "react";

interface TextAreaProps {
  id: string;
  name: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  text,
  setText,
}): ReactElement => {
  return (
    <div className="text-field">
      <label htmlFor={id}></label>
      <textarea
        name={name}
        id={id}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
};
