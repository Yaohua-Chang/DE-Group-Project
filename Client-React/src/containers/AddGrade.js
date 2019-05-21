import React, { Component } from "react";
import "./Create.css";

import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const ADD_STUDENTCOURSE = gql`
mutation addGrade ($assignmentID: ID!, $studentID: ID!, $grade: Float!) {
  createAssignmentGrade(assignmentID: $assignmentID, studentID: $studentID, grade:$grade) {
    id
    assignment {
      name
    }
    student {
      name
    }
    grade
  }
}

`;



class CourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignmentID: '',
      studentID:'',
      grade: null
    };
  }

  create = () => {
    window.location.href = "/faculty"
  };

  validateForm() {
    return this.state.assignmentID.length > 0 && this.state.grade && this.state.studentID.length> 0;
  }

  render() {

    return (
      <Mutation mutation={ADD_STUDENTCOURSE} onCompleted={() => { this.create() }}>
        {(addGrade, result) => {
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
                addGrade({
                  variables: {
                    assignmentID: this.state.assignmentID,
                    studentID: this.state.studentID,
                    grade: this.state.grade,
                    
                  }
                })
              }}>

                <FormGroup controlId="assignmentID" bsSize="large">
                  <ControlLabel>Assignment ID</ControlLabel>
                  <FormControl
                    autoFocus
                    type="text"
                    value={this.state.assignmentID}
                    onChange={e => this.setState({ assignmentID: e.target.value })}
                  />
                </FormGroup>

                <FormGroup controlId="studentID" bsSize="large">
                  <ControlLabel>Student ID</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.studentID}
                    onChange={e => this.setState({ studentID: e.target.value })}
                  />
                </FormGroup>

                <FormGroup controlId="agrade" bsSize="large">
                  <ControlLabel>Grade</ControlLabel>
                  <FormControl
                    type="grade"
                    value={this.state.grade}
                    onChange={e => this.setState({ grade: parseFloat(e.target.value) })}
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