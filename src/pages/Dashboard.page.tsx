import {FC, memo} from "react";
import { Link } from "react-router-dom";

interface Props {}

const Dashboard: FC<Props> = () => {
  return (
    <div>
      This is Dashboard Page
        Want Recordings?
        <Link to="/recordings">Go here</Link>
        <br/>

        Login Here 
      <Link to="/login">
        Click
      </Link>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);