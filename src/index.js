import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

import Homepage from "./components/Homepage/Homepage";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
  </Router>
  , document.getElementById("app")
);
