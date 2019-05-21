import React, { Component } from "react";

import {CURR_USER } from '../constants'


class StudentDetail extends Component {
  constructor(props) {
    super(props);
    const student = JSON.parse(localStorage.getItem(CURR_USER))
    this.state = {
      student_id: student.id,
      student_name: student.name,
      course_name: null,
      assignments: []
    };
  }

  componentWillMount() {
    let course = this.props.location.state;
    
    let {name, assignments} = course;
  
    this.state.course_name = name;
    this.state.assignments = assignments;
    console.log(assignments[0].grades)
    
  }

  onGoBackClick = (event) => {
    window.location.href = "/student";
  };

  render() {
    return (
      <div>
        <label>Welcome, {this.state.student_name}</label>
        <hr />
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th scope="col">Assginment ID</th>
              <th scope="col">Course Name</th>
              <th scope="col">Assginment Name</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            {this.state.assignments.length !== 0 ? (this.state.assignments.map(assignment => <CourseView key={assignment.id} course_name ={this.state.course_name} assignment={assignment} />)) : (<div>No data</div>)}
          </tbody>
        </table>
      </div>
    )
  }
};

const CourseView = ({course_name, assignment}) => (
  <tr>
    <th scope="row">
      {assignment.id}
    </th>
    <td>
      {course_name}
    </td>
    <td>
      {assignment.name}
    </td>
    <td>
      90
    </td>
  </tr>
);

export default StudentDetail