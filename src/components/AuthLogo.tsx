import { FC, memo } from "react";
import shield from "./../images/shield.webp";

interface Props {
  className: string,
}

const AuthLogo: FC<Props> = ({className}) => {
  return (
    <div className={"w-1/2 bg-black h-screen p-20 box-border " + className}>
      <img src={shield} alt="not found" className="h-full w-full" />
    </div>
  );
};

AuthLogo.defaultProps = {};

export default memo(AuthLogo);
