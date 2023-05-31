import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clasess from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  text?: string;
  children?: ReactNode
}
const Button: FC<Props> = ({ text, children, ...props }) => {
  return (
    <>
      <button className={clasess.button} {...props}>
        {text}
      </button>
    </>
  );
};

Button.defaultProps = { text: "Button" };
export default Button;
