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


class AssignmentList extends Component {
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


  onCreateAssignmentClick = (event) => {
    window.location.href = "/addAssignment";
  };

  onEditClick = () => {

    window.location.href = "/addGrade";

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
          const assignmentList = course[0].assignments
          return (
            <div>
              <label>Welcome! {this.state.faculty_name} </label>
              <label> . You can manage assignments of {this.course_name} here.</label>
              <hr />
              <table className="table table-striped">
                <thead className="thead-light">
                  <tr>
                    
                    <th scope="col">Assignment ID</th>
                    <th scope="col">Assignment name</th>
                  </tr>
                </thead>
                <tbody>
                  {assignmentList !== 0 ? (assignmentList.map(assignmentList => <AssignmentListView key={assignmentList.id} assignmentList={assignmentList} editClick={this.onEditClick} />)) : (<div>No data</div>)}
                </tbody>
              </table>
              <button type="button" onClick={this.onCreateAssignmentClick}>Add Assignment</button>
            </div>
          )
        }}
      </Query>
    )
  }
};

const AssignmentListView = ({ assignmentList, editClick }) => (
  <tr>
    <th scope="row">
      {assignmentList.id}
    </th>
    <td>
      {assignmentList.name}
    </td>
    
    <td>
    <a href="/addGrade" onClick={editClick}>Grade</a>
    
    </td>
  </tr>
);

export default AssignmentList



