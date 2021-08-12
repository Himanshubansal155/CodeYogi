import { useEffect } from "react";
import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { authAction } from "./actions/auth.actions";
import { LS_LOGIN_TOKEN } from "./api/Auth";
import { me } from "./api/Auth";
import AuthenticationPageLazy from "./pages/Auth/Authentication.page.lazy";
import HomePageLazy from "./pages/Home/Home.page.lazy";
import NotFoundPage from "./pages/NotFound.page";
import { meSelector } from "./selectors/auth.selectors";
import { useAppSelector } from "./store";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  const user = useAppSelector(meSelector);

  useEffect(() => {
    if (!token) {
      return;
    }
    me().then(u => authAction.fetch(u));
  }, []); // eslint-disable-line

  if (token && !user) {
    return <div className="text-blue-600">Loading...</div>;
  }
  return (
    <>
      <Suspense fallback={<div className="text-red-600">Loading....</div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {user ? <Redirect to="/dashboard" /> : <AuthenticationPageLazy />}
            </Route>
            <Route
              path={[
                "/dashboard",
                "/recordings",
                "/profile",
                "/groups",
                "/group/:groupId",
              ]}
              exact
            >
              {user ? <HomePageLazy /> : <Redirect to="/login" />}
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
