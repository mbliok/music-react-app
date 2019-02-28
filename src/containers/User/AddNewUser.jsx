import React from 'react';
import axios from 'axios';

type State = {};
type Props = {};
class AddNewUser extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [], // ? {}
      first_name: ''
      // last_name: ''
    };
  }

  // ADD new user
  handleSubmitUser = e => {
    e.preventDefault();
    const data = {
      first_name: this.state.first_name
    };
    axios.post(`http://localhost:3004/users`, { data }).then(res => {
      console.log(res);
      console.log(res.data);
    });

    this.setState({ data });
    console.log(data + 'My data');
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
        <form onSubmit={this.handleSubmitUser}>
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
        </form>
      </div>
    );
  }
}
export default AddNewUser;
