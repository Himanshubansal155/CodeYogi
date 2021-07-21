import { FC, memo } from "react";

interface Props {
    theme:"Primary"|"Success"|"Error",
    children:string,
    className:string,
}

const Alert: FC<Props> = ({theme, children, className}) => {
  const themeColor = theme === "Primary"? "bg-blue-200 text-blue-500":(theme === "Success"?"bg-green-200 text-green-500":"bg-gray-200 text-gray-500");
  return (
    <div className={"border-0 mb-4 h-10 p-2 px-5 shadow-md " + className + " " + themeColor} role="alert">
      <strong>{theme}!</strong> {children}
    </div>
  );
};

Alert.defaultProps = {
  theme:"Primary",
};

export default memo(Alert);
