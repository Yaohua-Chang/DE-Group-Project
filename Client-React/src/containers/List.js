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

  onEditClick = (id) => {
    window.location.href = "/editUser/" + id;
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.onCreateClick}>Create New User</button>
        <hr />

        <Query query={GET_USERS}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            const users = data.users

            // this.setState({users:data.users})

            return (
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
                  {users.map(user => <UserView key={user.id} user={user} />)}
                </tbody>
              </table>
            )
          }}
        </Query>
      </div>
    )
  }
};

const UserView = ({ user }) => (
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
      <a href="#" >Edit</a>
    </td>
  </tr>
);


// const UserCounter = () => (
//   <span>
//     {userStore.filterCompleted.length} of {userStore.users.length} Actived
//   </span>
// );

// class UserApp extends Component {

//   onCreateClick = (event) => {
//     window.location.href = "/createUser";
//   }

//   render() {
//     return (
//       <div>
//         <button type="button" onClick={this.onCreateClick}>Create New User</button>
//         <hr />
//         <UserList />
//       </div>)
//   }

// }



export default UserList