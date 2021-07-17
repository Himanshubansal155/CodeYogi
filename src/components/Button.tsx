import { ButtonHTMLAttributes } from "react";
import { FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string,
    children:string,
}

const Button: FC<Props> = ({children, className, ...rest}) => {
  return (
    <button
      {...rest}
      className={
        "bg-blue-600 shadow-2xl p-2 px-5 rounded-md text-white " + className
      }
    >
      {children}
    </button>
  );
};

Button.defaultProps = {};

export default memo(Button);
