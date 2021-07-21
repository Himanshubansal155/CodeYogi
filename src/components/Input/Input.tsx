import { InputHTMLAttributes } from "react";
import { FC, memo } from "react";
import { IconType } from "react-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  PlaceHolder: string;
  id: string;
  Icon?: IconType;
  touched:boolean | undefined,
  error:any,
}

const Input: FC<Props> = ({ id, className, Icon, PlaceHolder, error, touched, ...rest }) => {
  return (
    <>
      <div className="border-b-2 border-solid border-gray-200 w-96 flex items-center">
        {Icon && <Icon className="w-6 h-6 text-blue-400 inline" />}
        <label htmlFor={id} className="sr-only">
          {PlaceHolder}
        </label>
        <input
          {...rest}
          id={id}
          className={"p-3 outline-none w-full " + className}
          placeholder={PlaceHolder}
        />
      </div>
      <div className="text-red-500 h-6">{touched && error}</div>
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
