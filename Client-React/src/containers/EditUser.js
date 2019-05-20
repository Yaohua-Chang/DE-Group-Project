import React, { Component } from "react";
import "./Create.css";

import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const EDIT_USER = gql`
  mutation editUser ($id: ID!, $name: String!, $email: String!, $password: String!, $role: Role!) {
    updateUser(
        id: $id
        user: {
          name: $name
          email: $email
          password: $password
          role: $role
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
      id: 0,
      name: '',
      email: '',
      password: '',
      role: 'Student',
      message: ""
    };
  }

  componentDidMount() {
    let user = this.props.location.state;
    let {id, name, email, role, passwordHash} = user;

    this.setState({
      id: id,
      name : name,
      email: email,
      password: "password",
      role: role,
    })
  }

  finish = () => {
    window.location.href = "/admin"
  };

  validateForm() {
    return this.state.name.length > 0 && this.state.email.length > 0;
  }

  render() {

    return (
      <Mutation mutation={EDIT_USER} onCompleted={() => { this.finish() }}>
        {(editUser, result) => {
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
                editUser({
                  variables: {
                    id: this.state.id,
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

                <FormGroup controlId="role" bsSize="large">
                  <ControlLabel>Role</ControlLabel>
                  <select className="form-control" value={this.state.role} onChange={e => this.setState({ role: e.target.value })}>
                    <option value="Student" >Student</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Admin">Admin</option>
                  </select>
                </FormGroup>

                <Button
                  block
                  bsSize="large"
                  disabled={!this.validateForm()}
                  type="submit"
                >
                  Update
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