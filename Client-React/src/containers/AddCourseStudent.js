import React, { Component } from "react";
import "./Create.css";

import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const ADD_STUDENTCOURSE = gql`
mutation addStudent ($courseID: ID!, $studentID: ID!) {
  addCourseStudent(courseID: $courseID, studentID: $studentID) {
    id
    name
    students {
      id
      name
    }
  }
}
`;


class CourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseID: '',
      studentID: ''
    };
  }

  create = () => {
    window.location.href = "/faculty"
  };

  validateForm() {
    return this.state.courseID.length > 0 && this.state.studentID.length > 0;
  }

  render() {

    return (
      <Mutation mutation={ADD_STUDENTCOURSE} onCompleted={() => { this.create() }}>
        {(addStudent, result) => {
          const { data, loading, error, called } = result;

          if (loading) {
            this.state.message = "Loading..."
          }
          if (error) {
            // this.state.message = "Coursename or faculty ID is not right, please input again!"
            this.state.message = error + ""
          }

          return (
            <div className="Create">
              <form onSubmit={e => {
                e.preventDefault();
                addStudent({
                  variables: {
                    courseID: this.state.courseID,
                    studentID: this.state.studentID,
                    
                  }
                })
              }}>

                <FormGroup controlId="courseID" bsSize="large">
                  <ControlLabel>Course ID</ControlLabel>
                  <FormControl
                    autoFocus
                    type="text"
                    value={this.state.courseID}
                    onChange={e => this.setState({ courseID: e.target.value })}
                  />
                </FormGroup>

                <FormGroup controlId="studentID" bsSize="large">
                  <ControlLabel>student ID</ControlLabel>
                  <FormControl
                    type="studentID"
                    value={this.state.studentID}
                    onChange={e => this.setState({ studentID: e.target.value })}
                  />
                </FormGroup>

                <Button
                  block
                  bsSize="large"
                  disabled={!this.validateForm()}
                  type="submit"
                >
                  Submit
              </Button>
                <label className="Message">{this.state.message}</label>
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default CourseForm