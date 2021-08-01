import { useState } from "react";
import { useEffect } from "react";
import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_LOGIN_TOKEN, me } from "./api/Auth";
import { User } from "./models/User";
import AuthenticationPageLazy from "./pages/Auth/Authentication.page.lazy";
import HomePageLazy from "./pages/Home/Home.page.lazy";
import NotFoundPage from "./pages/NotFound.page";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if(!token){
      return;
    }
    me().then(setUser);
  }, []);

  if(token && !user){
    return (<div className="text-red-600">Loading...</div>);
  }
  return (
    <Suspense fallback={<div className="text-red-600">Loading....</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]} exact>
          {user ? <Redirect to="/dashboard" /> : <AuthenticationPageLazy onLogin={setUser}/>}
          </Route>
          <Route path={["/dashboard", "/recordings"]} exact>
          {user ? <HomePageLazy user={user!} /> : <Redirect to="/login" />}
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

