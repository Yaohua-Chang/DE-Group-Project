import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import List from "./containers/List";
import NotFound from "./containers/NotFound";
import CreateUser from "./containers/CreateUser"
import EditUser from "./containers/EditUser"

export default () =>
  <Switch>
    <Route path="/" exact component={List} />
    <Route path="/login" exact component={Login} />
    <Route path="/list" exact component={List} />
    <Route path="/createUser" exact component={CreateUser} />
    <Route path="/editUser" exact component={EditUser} />
    <Route component={NotFound} />
  </Switch>;