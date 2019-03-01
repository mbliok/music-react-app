import React from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

type State = {};
type Props = {};
class UsersList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: [],
      editUserData: {
        id: '',
        first_name: '',
        last_name: ''
      }
    };
  }
  componentWillMount() {
    this.refreshUser();
  }

  // GET all users
  componentDidMount() {
    axios
      .get('http://localhost:3004/users')
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  updateUser = e => {
    e.preventDefault();
    let { first_name, last_name } = this.state.editUserData;
    axios
      .put('http://localhost:3004/users/' + this.state.editUserData.id, {
        first_name,
        last_name
      })
      .then(res => {
        this.refreshUser();
        this.setState({
          // cleaning inputs field
          editUserData: {
            first_name: '',
            last_name: ''
          }
        });
      });
  };

  editUser = (id, first_name, last_name) => {
    console.log(first_name);
    this.setState({
      editUserData: { id, first_name, last_name }
    });
  };
  refreshUser = () => {
    axios
      .get('http://localhost:3004/users')
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  deleteUser = id => {
    axios.delete('http://localhost:3004/users/' + id).then(res => {
      this.refreshUser();
    });
  };
  render() {
    return (
      <div>
        All users
        <ul>
          {this.state.users.map(user => {
            return (
              <li key={user.id}>
                {user.id}
                {user.first_name} {user.last_name}
                <button
                  onClick={this.editUser.bind(
                    this,
                    user.id,
                    user.first_name,
                    user.last_name
                  )}
                >
                  Edit
                </button>
                <button onClick={this.deleteUser.bind(this, user.id)}>X</button>
              </li>
            );
          })}
        </ul>
        <form>
          <label>
            Edit First name:
            <input
              type="text"
              name="first_name"
              onChange={e => {
                let { editUserData } = this.state;
                editUserData.first_name = e.target.value;
                this.setState({ editUserData });
              }}
              value={this.state.editUserData.first_name || ''}
            />
          </label>
          <label>
            Edit Last name:
            <input
              type="text"
              name="last_name"
              onChange={e => {
                let { editUserData } = this.state;
                editUserData.last_name = e.target.value;
                this.setState({ editUserData });
              }}
              value={this.state.editUserData.last_name || ''}
            />
          </label>
          <button onClick={this.updateUser}>Save and update</button>
        </form>
      </div>
    );
  }
}
export default UsersList;
