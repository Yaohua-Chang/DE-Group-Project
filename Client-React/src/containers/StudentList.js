import React, { Component } from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import {CURR_USER } from '../constants'

const GET_STUDENTS = gql`
  {
    students {
      id
      name
      courses {
        id
        name
        professor {
          id
          name
        }
        assignments{
          id
          name
          grades {
            student {
              id
              name
            }
            grade
          }
        }
      }
    }
  }
`;

class CourseList extends Component {
  constructor(props) {
    super(props);
    const student = JSON.parse(localStorage.getItem(CURR_USER))
    this.state = {
      student_id: student.id,
      student_name: student.name
    };
  }

  onDetailClick = (course) => {

    let path = {
      pathname: '/detail',
      state: course,
    }
    this.props.history.push(path);

  };

  render() {
    return (

      <Query query={GET_STUDENTS}>
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

          const courses = data.students.filter(student => student.id === this.state.student_id)[0].courses
          return (
            <div>
              <label>Welcome, {this.state.student_name}</label>
              <hr />
              <table className="table table-striped">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Course ID</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Professor Name</th>
                    <th scope="col">Count of Assginments</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.length !== 0 ? (courses.map(course => <CourseView key={course.id} course={course} detailClick = {this.onDetailClick}/>)) : (<div>No data</div>)}
                </tbody>
              </table>
            </div>
          )
        }}
      </Query>

    )
  }
};

const CourseView = ({ course, detailClick }) => (
  <tr>
    <th scope="row">
      {course.id}
    </th>
    <td>
      {course.name}
    </td>
    <td>
      {course.professor.name}
    </td>
    <td>
      {course.assignments.length}
    </td>
    <td>
      <a href="detail" onClick={detailClick.bind(this, course)}>Detail</a>
    </td>
  </tr>
);

export default CourseList