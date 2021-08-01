import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import AuthLogo from "../../components/AuthLogo";
import { User } from "../../models/User";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";

interface Props {
  onLogin: (user:User)=> void
}

const Authentication: FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between">
      <Switch>
        <Route path="/login">
          <LoginPage onLogin = {props.onLogin}/>
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
      </Switch>
      <AuthLogo className="hidden md:block"/>
    </div>
  );
};

Authentication.defaultProps = {};

export default memo(Authentication);
