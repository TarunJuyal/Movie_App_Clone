import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "../hoc/auth";
import { LoadingOutlined } from "@ant-design/icons";
import LandingPage from "./views/LandingPage/LandingPage"

const LoginPage = React.lazy(()=> import("./views//LoginPage/LoginPage"));
const RegisterPage = React.lazy(()=> import("./views/RegisterPage/RegisterPage"));
const MovieDetailPage = React.lazy(()=> import("./views/MovieDetailPage/MovieDetailPage"));
const FavouritePage = React.lazy(()=> import("./views/FavouritePage/FavouritePage"));
const SearchResultPage = React.lazy(()=> import("./views/SearchResultPage/SearchResultPage"));
const RequestPasswordChangePage = React.lazy(()=> import("./views/ChangePasswordPage/RequestPasswordChangePage"));
const ResetPasswordPage = React.lazy(()=> import("./views/ChangePasswordPage/ResetPasswordPage"));
const NavBar = React.lazy(()=> import("./views/NavBar/NavBar"));

function App() {
  return (
    <Suspense fallback={<div className="app"><LoadingOutlined style={{ fontSize: "4rem" }} /></div>}>
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
