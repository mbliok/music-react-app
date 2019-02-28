import React from 'react';
import axios from 'axios';

type State = {};
type Props = {};
class AddNewUser extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [], // ? {}
      users: [],
      newUser: {
        first_name: '',
        last_name: ''
      }
    };
  }

  // ADD new user v1
  handleSubmitUser = e => {
    e.preventDefault();
    const data = {
      first_name: this.state.first_name
    };
    axios.post(`http://localhost:3004/users`, data).then(res => {
      console.log(res.data);
    });

    this.setState({ data });
    console.log(data + 'My data');
  };
  // Add new user v2
  addUser = e => {
    e.preventDefault();
    axios.post(`http://localhost:3004/users`, this.state.newUser).then(res => {
      console.log(res.data);
      let { users } = this.state;
      users.push(res.data);
      this.setState({
        users,
        newUser: {
          first_name: '',
          last_name: ''
        }
      }); // reset the state with curent new user and clean inputs // to do redirect
    });
  };
  onChange = e => {
    // this.setState({ first_name: e.target.value });
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  render() {
    const { data } = this.state;

    return (
      <div>
        Add new users
        {/* <form onSubmit={this.handleSubmitUser}>
          <label>
            User first name: {data.first_name}
            <input
              type="text"
              name="first_name"
              onChange={this.onChange}
              value={data.first_name || ''}
            />
          </label>

          <button type="submit">Add</button>
        </form> */}
        <form>
          <label>
            First name:
            <input
              type="text"
              name="first_name"
              onChange={e => {
                let { newUser } = this.state;
                newUser.first_name = e.target.value;
                this.setState({ newUser });
              }}
              value={this.state.newUser.first_name}
            />
          </label>
          <label>
            Last name:
            <input
              type="text"
              name="last_name"
              onChange={e => {
                let { newUser } = this.state;
                newUser.last_name = e.target.value;
                this.setState({ newUser });
              }}
              value={this.state.newUser.last_name}
            />
          </label>
          <button onClick={this.addUser}>Add new user</button>
        </form>
      </div>
    );
  }
}
export default AddNewUser;
