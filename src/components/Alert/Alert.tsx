import { FC, memo, useState } from "react";
import {HiOutlineX} from "react-icons/hi";
import Button from "../Button/Button";

interface Props {
    theme:"Primary"|"Success"|"Error",
    children:string,
    className:string,
}

const Alert: FC<Props> = ({theme, children, className}) => {
  const [hide, sethide] = useState(false);
  const themeColor = theme === "Primary"? "bg-blue-200 text-blue-500":(theme === "Success"?"bg-green-200 text-green-500":"bg-gray-200 text-gray-500");
  return (<>
    {hide && <div className={"border-0 mb-4 h-10 p-2 px-5 shadow-md " + className + " " + themeColor} role="alert">
      <strong>{theme}!</strong> {children}
      <span className="float-right" onClick={()=>sethide((open) =>!open)}><HiOutlineX/></span>
    </div>}{!hide && <Button children="Show" onClick={()=>sethide((open) =>!open)}/>}
    </>
  );
};

Alert.defaultProps = {
  theme:"Primary",
};

export default memo(Alert);
