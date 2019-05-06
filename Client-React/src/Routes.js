import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import List from "./containers/List";
import NotFound from "./containers/NotFound";
import CreateUser from "./containers/CreateUser"

export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/list" exact component={List} />
    <Route path="/createUser" exact component={CreateUser} />
    <Route path="/editUser/:id" exact component={CreateUser} />
    <Route component={NotFound} />
  </Switch>;