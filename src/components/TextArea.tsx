import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TextArea = ({ children }: Props) => {
  return (
    <textarea id="inputtext" rows={10} placeholder="type">
      {children}
    </textarea>
  );
};

export default TextArea;
