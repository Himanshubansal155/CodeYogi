import { Transition } from "@headlessui/react";
import { FC, Fragment, memo } from "react";
import * as icons from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { logout } from "../api/Auth";
import { meSelector } from "../selectors/auth.selectors";
import { SidebarSelector } from "../selectors/sidebar.selectors";
import { useAppSelector } from "../store";
import SideBarComponent from "./SideBarComponent";

interface Props {
  className?: string;
}

const Sidebar: FC<Props> = (props) => {
  const history = useHistory();
  const user = useAppSelector(meSelector);
  const toggle = useAppSelector(SidebarSelector);
  return (
    <div>
      <Transition
        show={toggle.isSidebarOpen}
        as={Fragment}
        enter="transform transition ease-linear duration-1000"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-linear duration-1000"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div
          className={
            "h-screen w-60 z-30 bg-gray-200 shadow-sm fixed ease-linear duration-1000 left-0 pb-28 top-24 mt-2 p-4 flex flex-col space-y-2 overflow-y-scroll " +
            props.className
          }
        >
          <SideBarComponent
            StartIcon={icons.FiHome}
            EndIcon={icons.FiChevronRight}
            children="Dashboard"
            onClick={() => history.push("/dashboard")}
          />
          <SideBarComponent
            StartIcon={icons.FiCpu}
            EndIcon={icons.FiChevronRight}
            children="Groups"
            onClick={() => history.push("/groups")}
          />
          <SideBarComponent
            StartIcon={icons.FiBox}
            EndIcon={icons.FiChevronRight}
            children="Users"
            onClick={() => history.push("/users")}
          />
          <SideBarComponent
            StartIcon={icons.FiZap}
            EndIcon={icons.FiChevronRight}
            children="Elements"
          />
          <SideBarComponent
            StartIcon={icons.FiTarget}
            EndIcon={icons.FiChevronRight}
            children="Font Icons"
          />
          <SideBarComponent StartIcon={icons.FiAirplay} children="Widgets" />
          <SideBarComponent StartIcon={icons.FiLayout} children="Tables" />
          <SideBarComponent
            StartIcon={icons.FiLayers}
            EndIcon={icons.FiChevronRight}
            children="Data Tables"
          />
          <SideBarComponent
            StartIcon={icons.FiClipboard}
            EndIcon={icons.FiChevronRight}
            children="Forms"
          />
          <SideBarComponent
            StartIcon={icons.FiUsers}
            EndIcon={icons.FiChevronRight}
            children="Users"
          />
          <SideBarComponent
            StartIcon={icons.FiFileMinus}
            EndIcon={icons.FiChevronRight}
            children="Pages"
          />
          <SideBarComponent
            StartIcon={icons.FiLock}
            children="Authentication"
          />
          <SideBarComponent StartIcon={icons.FiMove} children="Drag and Drop" />
          <SideBarComponent StartIcon={icons.FiMap} children="Maps" />
          <SideBarComponent StartIcon={icons.FiPieChart} children="Charts" />
          <SideBarComponent
            StartIcon={icons.FiBook}
            EndIcon={icons.FiChevronRight}
            children="Documentation"
          />
          <SideBarComponent
            StartIcon={icons.FiLogOut}
            children={user!.first_name + user!.last_name}
            onClick={() => {
              logout();
              window.location.href = "/login";
            }}
          />
        </div>
      </Transition>
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
