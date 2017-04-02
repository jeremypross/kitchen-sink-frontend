import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

import "./styles/normalize.css";
import "./styles/bootstrap.min.css";
import "./styles/style.css";

import Homepage from "./components/Homepage/Homepage";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import RecipeResult from "./components/RecipeResult/RecipeResult";
import Modal from "./components/Modal/Modal";
import Dashboard from "./components/Dashboard/Dashboard";
import SavedRecipe from "./components/Dashboard/SavedRecipe";


ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/api" component={RecipeResult} />
    <Route path="/modal" component={Modal} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>
  , document.getElementById("app")
);
