import { InputHTMLAttributes } from "react";
import { FC, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  PlaceHolder: string;
  id: string;
}

const Input: FC<Props> = ({ id, className, PlaceHolder, ...rest }) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {PlaceHolder}
      </label>
      <input
        {...rest}
        id={id}
        className={"p-3 outline-none w-full " + className}
        placeholder={PlaceHolder}
      />
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
