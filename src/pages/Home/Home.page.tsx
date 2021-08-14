import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Profile from "./Profile";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";
import Groups from "./Groups.page";
import GroupPage from "./Group.page";
import UserPage from "./User.page";
interface Props {}

const Home: FC<Props> = (props) => {
  return (
    <div className="flex flex-row">
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/dashboard">
          <Header pageName="Dashboard" componentName="Sales" />
          <DashboardPage />
        </Route>
        <Route path="/recordings">
          <Header pageName="User" componentName="Users" />
          <RecordingsPage />
        </Route>
        <Route path="/profile">
          <Header pageName="User" componentName="Profile" />
          <Profile />
        </Route>
        <Route path="/groups">
          <Header pageName="User" componentName="Groups" />
          <Groups />
        </Route>
        <Route path="/group/:groupId">
          <Header pageName="Groups" componentName="Group" />
          <GroupPage />
        </Route>
        <Route path="/user/:userId">
          <Header pageName="User" componentName="User" />
          <UserPage />
        </Route>
      </Switch>
    </div>
  );
};

Home.defaultProps = {};

export default memo(Home);
