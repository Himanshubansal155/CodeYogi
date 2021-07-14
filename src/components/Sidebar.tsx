import {FC, memo} from "react";

interface Props {}

const Sidebar: FC<Props> = () => {
  return (
    <div className="h-screen w-80 bg-indigo-200">
        sidebar
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);