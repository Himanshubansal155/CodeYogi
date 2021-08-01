import { useContext } from "react";
import { FC, memo } from "react";
import { logout } from "../api/Auth";
import AppContext from "../pages/App.context";

interface Props {
  className:string,
}

const Sidebar: FC<Props> = (props) => {
  const {user} = useContext(AppContext);
  return (
    <div className={"h-screen w-80 bg-indigo-200 fixed left-0 top-28 " + props.className}>
      sidebar
      {user!.first_name}
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
