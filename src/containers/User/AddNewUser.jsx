import React from 'react';
import axios from 'axios';

type State = {};
type Props = {};
class AddNewUser extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      first_name: ''
      // last_name: ''
    };
  }

  // ADD new user
  handleSubmitUser = e => {
    e.preventDefault();
    const user = {
      first_name: this.state.first_name
    };
    axios.post(`http://localhost:3004/users`, { user }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };
  onChangeName = e => {
    this.setState({ first_name: e.target.value });
  };
  render() {
    return (
      <div>
        Add new users
        <form onSubmit={this.handleSubmitUser}>
          <label>
            User first name:
            <input
              type="text"
              name="first_name"
              onChange={this.onChangeName}
              value={this.state.first_name}
            />
          </label>

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
export default AddNewUser;
