import {FC, memo} from "react";

interface Props {}

const AuthLogo: FC<Props> = () => {
    console.log("Renderring");
    
  return (
    <div className="w-1/2 bg-blue-900 h-screen">
        logo hero 
    </div>
  );
};

AuthLogo.defaultProps = {};

export default memo(AuthLogo);