import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  clickHandler: () => any;
}

const Button = ({ children, clickHandler }: Props) => {
  return (
    <button className="calculator-button" onClick={clickHandler} type="button">
      {children}
    </button>
  );
};

export default Button;
