import { FC, memo } from "react";
import { logout } from "../api/Auth";
import { User } from "../models/User";

interface Props {
  className:string,
  user:User;
}

const Sidebar: FC<Props> = (props) => {
  return (
    <div className={"h-screen w-80 bg-indigo-200 fixed left-0 top-28 " + props.className}>
      sidebar
      {props.user.first_name}
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
