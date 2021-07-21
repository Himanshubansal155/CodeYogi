import { FC, memo } from "react";

interface Props {
    className:string,
    online:"online"|"offline",
    src: string | undefined,
    divClassName?:string,
}

const Avatar: FC<Props> = ({className, online, src, divClassName}) => {
  return (
    <div className={"relative w-max " + divClassName}>
      <img
        alt="avatar"
        src={src}
        className={"rounded-full " + className}
      />
      {online==="online" && <div className="absolute bottom-1.5 bg-green-600 rounded-full h-4 w-4 border-2 border-white right-1"></div>}
    </div>
  );
};

Avatar.defaultProps = {};

export default memo(Avatar);
