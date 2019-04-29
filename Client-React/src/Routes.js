import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import List from "./containers/List";
import NotFound from "./containers/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/list" exact component={List} />
    <Route component={NotFound} />
  </Switch>;