import { FC, memo } from "react";
import { logout } from "../Api";

interface Props {
  className:string,
}

const Sidebar: FC<Props> = ({className}) => {
  return (
    <div className={"h-screen w-80 bg-indigo-200 " + className}>
      sidebar
      <button
        onClick={() => {
          logout();
          window.location.href = "/login";
        }}
      >
        LogOut
      </button>
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
