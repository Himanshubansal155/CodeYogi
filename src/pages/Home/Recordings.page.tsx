import { FC, memo } from "react";
import HomeLayout from "../../components/HomeLayout";
import { SidebarSelector } from "../../selectors/sidebar.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Recordings: FC<Props> = () => {
  const toggle = useAppSelector(SidebarSelector);
  return (
    <HomeLayout toggle={toggle.isSidebarOpen}>
      <>This is recording page</>
    </HomeLayout>
  );
};

Recordings.defaultProps = {};

export default memo(Recordings);
