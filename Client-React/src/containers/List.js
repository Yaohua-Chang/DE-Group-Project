import "./List.css";
import React, { Component } from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_USERS = gql`
  {
      users {
        id
        name
        email
        role
      }
  }
`;

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  onCreateClick = (event) => {
    window.location.href = "/createUser";
  };

  onEditClick = (user) => {

    let path = {
      pathname: '/editUser',
      state: user,
    }
    this.props.history.push(path);

  };

  render() {
    return (

      <Query query={GET_USERS}>
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

          return (
            <div>
              <button type="button" onClick={this.onCreateClick}>Create New User</button>
              <hr />
              <table className="table table-striped">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {data.users.map(user => <UserView key={user.id} user={user} editClick={this.onEditClick} />)}
                </tbody>
              </table>
            </div>
          )
        }}
      </Query>

    )
  }
};

const UserView = ({ user, editClick }) => (
  <tr>
    <th scope="row">
      {user.id}
    </th>
    <td>
      {user.name}
    </td>
    <td>
      {user.email}
    </td>
    <td>
      {user.role}
    </td>
    <td>
      <a href="#" onClick={editClick.bind(this, user)}>Edit</a>
    </td>
  </tr>
);

export default UserList