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
import CreateCourse from "./containers/CreateCourse"
import ManageCourse from "./containers/ManageCourse"
import AddCourseStudent from "./containers/AddCourseStudent"
import AddAssignment from "./containers/AddAssignment"
import AddGrade from "./containers/AddGrade"
export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/admin" exact component={AdminList} />
    <Route path="/student" exact component={StudentList} />
    <Route path="/faculty" exact component={FacultyList} />
    <Route path="/createUser" exact component={CreateUser} />
    <Route path="/editUser" exact component={EditUser} />
    <Route path="/createCourse" exact component={CreateCourse} />
    <Route path="/manageCourse" exact component={ManageCourse} />
    <Route path="/addCourseStudent" exact component={AddCourseStudent} />
    <Route path="/addAssignment" exact component={AddAssignment} />
    <Route path="/addGrade" exact component={AddGrade} />
    <Route component={NotFound} />
  </Switch>;
 