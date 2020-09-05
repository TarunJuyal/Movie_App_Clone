import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import MovieDetailPage from "./views/MovieDetailPage/MovieDetailPage";
import FavouritePage from "./views/FavouritePage/FavouritePage";
import SearchResultPage from "./views/SearchResultPage/SearchResultPage";

function App() {
  return (
    <Suspense fallback={<div>Loading.... </div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)}></Route>
          <Route exact path="/login" component={Auth(LoginPage, false)}></Route>
          <Route
            exact
            path="/register"
            component={Auth(RegisterPage, false)}
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
            path="/search/:movieName"
            component={Auth(SearchResultPage, null)}
          ></Route>
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
