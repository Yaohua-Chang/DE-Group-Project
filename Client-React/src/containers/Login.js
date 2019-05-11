import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AUTH_TOKEN, CURR_USER } from '../constants'

const LOGIN_MUTATION = gql`
    mutation loginUserMutation($email: String!, $password: String!){ 
      loginUser(email:$email, password: $password) {
        token
        user {
          id
          name
          email,
          role
        }
      } 
  }
`;

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: ""
    };
  }


  componentDidMount() {
    let message = this.props.location.state;

    this.setState({
      message: message
    })
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  _confirm = async data => {

    this._saveUserData(data.loginUser.token, data.loginUser.user);
    window.location.href = "/list";
  }

  _saveUserData = (token, user) => {
    localStorage.setItem(AUTH_TOKEN, token);
    localStorage.setItem(CURR_USER, user);
  }


  render() {
    return (

      <Mutation mutation={LOGIN_MUTATION} onCompleted={data => this._confirm(data)}>
        {(loginUserMutation, { data, loading, error }) => {
          if (loading) {
            this.state.message = "Loading..."
          }
          if (error) {
            // this.state.message = "Username or password is not right, please input again!"
            this.state.message = error + ""
          }
          return (
            <div className="Login">

              <form onSubmit={e => {
                e.preventDefault();
                loginUserMutation({
                  variables: {
                    email: this.state.email,
                    password: this.state.password
                  }
                })
              }}>
                <FormGroup controlId="email" bsSize="large">
                  <ControlLabel>Email</ControlLabel>
                  <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                  />
                </FormGroup>
                <Button
                  block
                  bsSize="large"
                  disabled={!this.validateForm()}
                  type="submit"
                >
                  Login
          </Button>
                <label className="Message">{this.state.message}</label>
              </form>

            </div>
          )
        }}
      </Mutation>
    )
  }
}

export default Login;