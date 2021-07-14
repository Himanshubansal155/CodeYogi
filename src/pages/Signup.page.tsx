import {FC, memo} from "react";
import { Link } from "react-router-dom";

interface Props {}

const signup: FC<Props> = () => {
  return (
    <div>
        This is Sign up Page
        <br />
        Already have an account? <Link to="/login">Click here</Link>

    </div>
  );
};

signup.defaultProps = {};

export default memo(signup);