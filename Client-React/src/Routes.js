import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import AdminList from "./containers/AdminList";
import StudentList from "./containers/StudentList";
import FacultyList from "./containers/FacultyList";
import NotFound from "./containers/NotFound";
import CreateUser from "./containers/CreateUser"
import EditUser from "./containers/EditUser"

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/admin" exact component={AdminList} />
    <Route path="/student" exact component={StudentList} />
    <Route path="/faculty" exact component={FacultyList} />
    <Route path="/createUser" exact component={CreateUser} />
    <Route path="/editUser" exact component={EditUser} />
    <Route component={NotFound} />
  </Switch>;