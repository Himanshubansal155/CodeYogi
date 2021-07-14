import {FC, memo} from "react";
import { Link } from "react-router-dom";

interface Props {}

const Login: FC<Props> = () => {
  return (
    <div>
      Login Page 
      <br></br>
      Don't have an account? <Link to="/signup">Click here</Link>
      <br/>
      Login successfully
      <Link to="/dashboard">
        Dashboard
      </Link>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);