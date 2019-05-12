import React, { Component } from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import {CURR_USER } from '../constants'

const GET_FACULTIES = gql`
  {
      faculty {
        id
        name
        courses {
          id
          name
          students {
            id
            name
          }
        }
      }
  }
`;

class FacultyList extends Component {
  constructor(props) {
    super(props);
    const faculty = JSON.parse(localStorage.getItem(CURR_USER))
    this.state = {
      faculty_id: faculty.id,
      faculty_name: faculty.name
    };
  }

  onCreateClick = (event) => {
    window.location.href = "/createUser";
  };

  onEditClick = (faculty) => {

    let path = {
      pathname: '/editUser',
      state: faculty,
    }
    this.props.history.push(path);

  };

  render() {
    return (

      <Query query={GET_FACULTIES}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) {
            let path = {
              pathname: '/login',
              state: "Please login to accesss university management system.",
            }
            this.props.history.push(path);

            return null;
          }

          const courses = data.faculty.filter(faculty => faculty.id === this.state.faculty_id)[0].courses

          return (
            <div>
              <button type="button" onClick={this.onCreateClick}>Create New course</button>
              <hr />
              <table className="table table-striped">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Course ID</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Total Numbers of Student</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.length !== 0 ? (courses.map(course => <FacultyView key={course.id} course={course} editClick={this.onEditClick} />)): (<div>No data</div>)}
                </tbody>
              </table>
            </div>
          )
        }}
      </Query>

    )
  }
};

const FacultyView = ({ course, editClick }) => (
  <tr>
    <th scope="row">
      {course.id}
    </th>
    <td>
      {course.name}
    </td>
    <td>
      {course.students.length}
    </td>
    <td>
      <a href="#">Manage</a>
    </td>
  </tr>
);

export default FacultyList