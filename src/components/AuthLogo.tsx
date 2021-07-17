import { FC, memo } from "react";
import shield from "./../images/shield.webp";

interface Props {}

const AuthLogo: FC<Props> = () => {
  return (
    <div className="w-1/2 bg-black h-screen p-20 box-border">
      <img src={shield} alt="not found" className="h-full w-full" />
    </div>
  );
};

AuthLogo.defaultProps = {};

export default memo(AuthLogo);
