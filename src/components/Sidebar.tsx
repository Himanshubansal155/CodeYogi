import { FC, memo } from "react";
import { logout } from "../api/Auth";

interface Props {
  className:string,
}

const Sidebar: FC<Props> = ({className}) => {
  return (
    <div className={"h-screen w-80 bg-indigo-200 fixed left-0 top-12 " + className}>
      sidebar
      <br></br>
      <button className="p-2 bg-blue-700"
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
