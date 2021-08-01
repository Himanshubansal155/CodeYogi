import {FC, memo} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { User } from "../../models/User";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";
interface Props {
    user:User
}

const Home: FC<Props> = (props) => {
    return (
        <div className="flex flex-row">
            <Navbar />
            <Header />
            <Sidebar className="hidden md:block" user={props.user!}/>
            <Switch>
                <Route path="/dashboard">
                    <DashboardPage />
                </Route>
                <Route path="/recordings">
                    <RecordingsPage />
                </Route>
            </Switch>
        </div>
    );
};

Home.defaultProps = {};

export default memo(Home);