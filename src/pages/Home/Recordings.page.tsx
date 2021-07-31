import {FC, memo} from "react";
import { Link } from "react-router-dom";

interface Props {}

const Recordings: FC<Props> = () => {
  return (
    <div>
      This is Recordings Page
        Want Dashboard?
        <Link to="/dashboard">Go here</Link>
    </div>
  );
};

Recordings.defaultProps = {};

export default memo(Recordings);