import React, { Component } from "react";
import "./Create.css";

import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const ADD_COURSE = gql`
  mutation addCourse ($name: String!, $facultyID: ID!) {
    createCourse(name: $name, facultyID: $facultyID) {
      id
      name
      professor{
        name
      }
    }
  }
`;


class CourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      facultyID: ''
    };
  }

  create = () => {
    window.location.href = "/faculty"
  };

  validateForm() {
    return this.state.name.length > 0 && this.state.facultyID.length > 0;
  }

  render() {

    return (
      <Mutation mutation={ADD_COURSE} onCompleted={() => { this.create() }}>
        {(addCourse, result) => {
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
                addCourse({
                  variables: {
                    name: this.state.name,
                    facultyID: this.state.facultyID,
                    
                  }
                })
              }}>

                <FormGroup controlId="name" bsSize="large">
                  <ControlLabel>Course Name</ControlLabel>
                  <FormControl
                    autoFocus
                    type="text"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </FormGroup>

                <FormGroup controlId="facultyID" bsSize="large">
                  <ControlLabel>facultyID</ControlLabel>
                  <FormControl
                    type="facultyID"
                    value={this.state.facultyID}
                    onChange={e => this.setState({ facultyID: e.target.value })}
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