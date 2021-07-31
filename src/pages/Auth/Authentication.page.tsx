import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import AuthLogo from "../../components/AuthLogo";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";

interface Props {}

const Authentication: FC<Props> = () => {
  return (
    <div className="flex flex-row justify-between">
      <Switch>
        <Route path="/login">
          <LoginPage />
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
