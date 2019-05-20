import React, { Component } from "react";
import "./Create.css";

import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const ADD_USER = gql`
  mutation addUser ($name: String!, $email: String!, $role: Role!, $password: String!) {
    createUser(
        user: {
          name: $name
          email: $email
          role: $role
          password: $password
        }
      ) {
        id
        name
      }
  }
`;

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      role: 'Student',
      password: '',
      message: ""
    };
  }

  create = () => {
    window.location.href = "/admin"
  };

  validateForm() {
    return this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {

    return (
      <Mutation mutation={ADD_USER} onCompleted={() => { this.create() }}>
        {(addUser, result) => {
          const { data, loading, error, called } = result;

          if (loading) {
            this.state.message = "Loading..."
          }
          if (error) {
            // this.state.message = "Username or password is not right, please input again!"
            this.state.message = error + ""
          }

          return (
            <div className="Create">
              <form onSubmit={e => {
                e.preventDefault();
                addUser({
                  variables: {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    role: this.state.role
                  }
                })
              }}>

                <FormGroup controlId="name" bsSize="large">
                  <ControlLabel>Name</ControlLabel>
                  <FormControl
                    autoFocus
                    type="text"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </FormGroup>

                <FormGroup controlId="email" bsSize="large">
                  <ControlLabel>Email</ControlLabel>
                  <FormControl
                    type="email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </FormGroup>

                <FormGroup controlId="password" bsSize="large">
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                    type="password"
                  />
                </FormGroup>

                <FormGroup controlId="role" bsSize="large">
                  <ControlLabel>Role</ControlLabel>
                  <select className="form-control" value={this.state.role} onChange={e => this.setState({ role: e.target.value })}>
                    <option value="Student" >Student</option>
                    <option value="Faculty">Faculty</option>
                  </select>
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

export default UserForm