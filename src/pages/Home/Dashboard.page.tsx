import { FC, memo } from "react";
import HomeLayout from "../../components/HomeLayout";
import { SidebarSelector } from "../../selectors/sidebar.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Dashboard: FC<Props> = () => {
  const toggle = useAppSelector(SidebarSelector);
  return (
    <HomeLayout toggle={toggle.isSidebarOpen}>
      <div className="">This is Dashboard Page</div>
    </HomeLayout>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
