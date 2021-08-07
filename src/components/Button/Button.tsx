import { ButtonHTMLAttributes } from "react";
import { FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "success" | "Error" | "undefined";
  className?: string;
  outline?: "outline" | "none";
}

const Button: FC<Props> = ({
  theme,
  children,
  className,
  outline,
  ...rest
}) => {
  let themeColor =
    theme === "primary"
      ? "bg-blue-600 text-white"
      : theme === "success"
      ? "bg-green-200 text-white "
      : theme === "Error"
      ? "bg-gray-200 text-white "
      : "";
  if (outline === "outline") {
    themeColor =
      theme === "primary"
        ? "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-2xl"
        : theme === "success"
        ? "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:shadow-2xl"
        : theme === "Error"
        ? "border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white hover:shadow-2xl"
        : "";
  }
  return (
    <button
      {...rest}
      className={
        "shadow-2xl p-1 rounded-md ease-in-out duration-300 " +
        className +
        " " +
        themeColor
      }
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "primary",
  outline: "none",
};

export default memo(Button);
