import React, { Component, useState } from "react";
import "./Create.css";

import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

@observer
class UserForm extends Component {
  constructor(props) {
    super(props);
    
    
  }
  componentWillMount(){
    if(this.props.match.params.id != null) {
      this.setEditingUser(this.props.match.params.id)
    }
  }

  @observable editingUser = { id: null, first: "", last: "", email: "", role: ""};

  @observable users = [
    {'id': 0, 'first': 'Joe', 'last': 'Bloggs',
        'email': 'joe@bloggs.com', 'role': 'student', 'active': true},
    {'id': 1, 'first': 'Ben', 'last': 'Bitdiddle',
        'email': 'ben@cuny.edu', 'role': 'student', 'active': true},
    {'id': 2, 'first': 'Alissa P', 'last': 'Hacker',
        'email': 'missalissa@cuny.edu', 'role': 'professor', 'active': true},
  ];

  @action
  setEditingUser(id) {
    let user = this.users.find(e => e.id == id);
    this.editingUser.id = id
    this.editingUser.first = user.first
    this.editingUser.last = user.last
    this.editingUser.email = user.email
    this.editingUser.role = user.role
  }

  @action
  clearForm = () => {
    this.editingUser.id = null
    this.editingUser.first = "";
    this.editingUser.last = "";
    this.editingUser.email = "";
    this.editingUser.role = "";
  }

  // create a user and post it to server
  @action
  create = () => {
    // let newUser = {first: this.editingUser.first, last: this.editingUser.last, email:this.editingUser.email, role: this.editingUser.role, actived: false }
    // fetch(this.BASE_URL + "/users", {
    //   method: 'post',
    //   body: JSON.stringify(newUser),
    //   headers:{'Content-Type': 'application/json'}
    // })
    // .then(res => res.json())
    // .then(response => {
    //     this.fetchUsers()
    //     this.clearForm()
    //     console.log('Success:', JSON.stringify(response))
    //   })
    // .catch(error => console.error('Error:', error));

    window.location.href = "/list"
  };

  // update a user
  @action
  update = () => {
    // fetch(this.BASE_URL + "/users/" + this.editingUser.id, {
    //   method: 'PATCH',
    //   body: JSON.stringify(this.editingUser),
    //   headers:{'Content-Type': 'application/json'}
    // })
    // .then(res => res.json())
    // .then(response => {
    //     this.fetchUsers()
    //     this.clearForm()
    //     console.log('Success:', JSON.stringify(response))
    //   })
    // .catch(error => console.error('Error:', error));
    window.location.href = "/list"
  };

  @action
  saveUser = editingUser => {
    if (this.editingUser.id == null) {
        this.create()
    } else {
        this.update()
    }
  }

  @action
  handleFirstInputChange = event => {
    this.editingUser.first = event.target.value;
  };
  @action
  handleLastInputChange = event => {
    this.editingUser.last = event.target.value;
  };
  @action
  handleEmailInputChange = event => {
    this.editingUser.email = event.target.value;
  };
  @action
  handleRoleInputChange = event => {
    this.editingUser.role = event.target.value;
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.saveUser()
  };

  render() {
    return (
      <div className="Create">
      <form onSubmit={this.onFormSubmit}>
        <label>
          first:
          <input
            type="text"
            name="first"
            value={this.editingUser.first}
            onChange={this.handleFirstInputChange}
          />
        </label>
        <br/>
        <label>
          last:
          <input
            type="text"
            name="last"
            value={this.editingUser.last}
            onChange={this.handleLastInputChange}
          />
        </label>
        <br/>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={this.editingUser.email}
            onChange={this.handleEmailInputChange}
          />
        </label>
        <br/>
        <label>
          role:
          <select onChange={this.handleRoleInputChange} value={this.editingUser.role}>
            <option value="">--Please choose a role--</option>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
          </select>
        </label>
        <br/>
        <input type="submit" value={this.editingUser.id ? "update user" : "create user"} />
      </form>
      </div>
    );
  }
}

export default UserForm