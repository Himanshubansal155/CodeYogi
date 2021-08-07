import {FC, memo} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Profile from "./Profile";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";
import Groups from "./Groups.page";
import GroupPage from "./Group.page";
interface Props {
}

const Home: FC<Props> = (props) => {
    return (
        <div className="flex flex-row">
            <Navbar />
            <Header />
            <Sidebar className="hidden md:block"/>
            <Switch>
                <Route path="/dashboard">
                    <DashboardPage />
                </Route>
                <Route path="/recordings">
                    <RecordingsPage />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/groups">
                    <Groups />
                </Route>
                <Route path="/group">
                    <GroupPage />
                </Route>
            </Switch>
        </div>
    );
};

Home.defaultProps = {};

export default memo(Home);