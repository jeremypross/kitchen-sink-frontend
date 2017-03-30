import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

import Homepage from "./components/Homepage/Homepage";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import RecipeResult from "./components/RecipeResult/RecipeResult";

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/api" component={RecipeResult} />
  </Router>
  , document.getElementById("app")
);
