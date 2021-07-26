import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_LOGIN_TOKEN } from "./Api";
import AuthenticationPage from "./pages/Authentication.page";
import HomePage from "./pages/Home.page";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]}>
            <AuthenticationPage />
          </Route>
          <Route path={["/dashboard", "/recordings"]}>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
