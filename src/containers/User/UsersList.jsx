import React from 'react';
import axios from 'axios';

type State = {};
type Props = {};
class UsersList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: []
    };
  }
  // GET all users
  componentDidMount() {
    axios
      .get('http://localhost:3004/users')
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ users: res.data });
      })
      //.then(res => res.data)
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        All users
        <ul>
          {this.state.users.map(user => {
            console.log(user);
            return (
              <li key={user.id}>
                {user.first_name} {user.last_name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default UsersList;
