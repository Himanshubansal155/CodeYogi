import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthenticationPage from "./pages/Authentication.page";
import HomePage from "./pages/Home.page";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path={["/login", "/signup"]}>
            <AuthenticationPage />
          </Route>
          <Route path={["/dashboard", "/recordings"]}>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
