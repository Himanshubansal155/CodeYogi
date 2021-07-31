import { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_LOGIN_TOKEN } from "./api/Auth";
import AuthenticationPageLazy from "./pages/Auth/Authentication.page.lazy";
import HomePageLazy from "./pages/Home/Home.page.lazy";
import NotFoundPage from "./pages/NotFound.page";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return (
    <Suspense fallback={<div className="text-red-600">Loading....</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]} exact>
          {token ? <Redirect to="/dashboard" /> : <AuthenticationPageLazy />}
          </Route>
          <Route path={["/dashboard", "/recordings"]} exact>
          {token ? <HomePageLazy /> : <Redirect to="/login" />}
          </Route>
          <Route>
            <NotFoundPage/>
          </Route>
        </Switch>
      </BrowserRouter>
      </Suspense>
  );
}

export default App;

