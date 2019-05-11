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
      message: ""
    };
  }

  componentDidMount() {
    let user = this.props.location.state;
    let {name, email, role} = user;

    this.setState({
      name : name,
      email: email,
      role: role,
    })
  }

  create = () => {
    window.location.href = "/list"
  };

  validateForm() {
    return this.state.name.length > 0 && this.state.email.length > 0;
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
                window.location.href = "/list"
                // addUser({
                //   variables: {
                //     name: this.state.name,
                //     email: this.state.email,
                //     password: this.state.password,
                //     role: this.state.role
                //   }
                // })
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