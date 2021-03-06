import React, { Component } from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import {CURR_USER } from '../constants'

const GET_STUDENTS = gql`
query {
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
      assignments{
        id
        name
        grades{
          
          grade
          student{
            id
            name
          }
        }
      }    
      }
    }
  }`
;


class CourseList extends Component {
  constructor(props) {
    super(props);
    const faculty = JSON.parse(localStorage.getItem(CURR_USER))
    this.state = {
      faculty_id: faculty.id,
      faculty_name: faculty.name
    };
  }

  componentDidMount() {
    let course = this.props.location.state;
    
    let {id, name} = course;
    
    this.course_id = id;
    this.course_name = name;
  }


  onCreateClick = (event) => {
    window.location.href = "/addCourseStudent";
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

          const courses = data.faculty.filter(faculty => faculty.id === this.state.faculty_id)[0].courses
          const course = courses.filter(courses => courses.id === this.course_id)
          const studentList = course[0].students
          return (
            <div>
              <label>Welcome! {this.state.faculty_name} </label>
              <label> . You can manage enrolled students of {this.course_name} here.</label>
              
              <hr />
              <table className="table table-striped">
                <thead className="thead-light">
                  <tr>
                    
                    <th scope="col">enrolled Student ID</th>
                    <th scope="col">enrolled Student name</th>
                  </tr>
                </thead>
                <tbody>
                  {studentList !== 0 ? (studentList.map(studentList => <StudentListView key={studentList.id} studentList={studentList} />)) : (<div>No data</div>)}
                </tbody>
              </table>
              <button type="button" onClick={this.onCreateClick}>Add Student</button>
            </div>
          )
        }}
      </Query>

      

    )
  }
};

const StudentListView = ({ studentList }) => (
  <tr>
    <th scope="row">
      {studentList.id}
    </th>
    <td>
      {studentList.name}
    </td>
    
    <td>
      <a href="#">Detail</a>
    </td>
  </tr>
);

export default CourseList



