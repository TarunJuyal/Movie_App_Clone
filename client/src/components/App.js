import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar from "./views/NavBar/NavBar";
import MovieDetailPage from "./views/MovieDetailPage/MovieDetailPage";
import FavouritePage from "./views/FavouritePage/FavouritePage";
import SearchResultPage from "./views/SearchResultPage/SearchResultPage";
import RequestPasswordChangePage from "./views/ChangePasswordPage/RequestPasswordChangePage";
import ResetPasswordPage from "./views/ChangePasswordPage/ResetPasswordPage";

function App() {
  return (
    <Suspense fallback={<div>Loading.... </div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route
            exact
            path="/search/:movieName"
            component={Auth(SearchResultPage, null)}
          ></Route>
          <Route
            exact
            path="/reset/:token"
            component={Auth(ResetPasswordPage, null)}
          ></Route>
          <Route
            exact
            path="/movie/:movieId"
            component={Auth(MovieDetailPage, null)}
          ></Route>
          <Route
            exact
            path="/favourite"
            component={Auth(FavouritePage, null)}
          ></Route>
          <Route
            exact
            path="/forgotPassword"
            component={Auth(RequestPasswordChangePage, false)}
          ></Route>
         <Route exact path="/login" component={Auth(LoginPage, false)}></Route>
          <Route
            exact
            path="/register"
            component={Auth(RegisterPage, false)}
          ></Route>
           <Route exact path="/" component={Auth(LandingPage, null)}></Route>
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
