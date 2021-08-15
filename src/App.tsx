import { useEffect } from "react";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { meFetchAction } from "./actions/auth.actions";
import { LS_LOGIN_TOKEN } from "./api/Auth";
import AuthenticationPageLazy from "./pages/Auth/Authentication.page.lazy";
import HomePageLazy from "./pages/Home/Home.page.lazy";
import NotFoundPage from "./pages/NotFound.page";
import { meSelector } from "./selectors/auth.selectors";
import { useAppSelector } from "./store";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  const user = useAppSelector(meSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(meFetchAction());
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
                "/users",
                "/profile",
                "/groups",
                "/group/:groupId",
                "/user/:userId",
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
