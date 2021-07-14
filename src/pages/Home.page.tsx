import {FC, memo} from "react";
import { Link, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";
interface Props {}

const Home: FC<Props> = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
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