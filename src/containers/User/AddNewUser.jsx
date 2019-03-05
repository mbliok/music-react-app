import React from 'react';
import axios from 'axios';
import { Container, Button, Form, List, Divider } from 'semantic-ui-react';
import jwt from 'jsonwebtoken';

type State = {};
type Props = {};
class AddNewUser extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      users: [],
      newUser: {
        first_name: '',
        last_name: ''
      }
    };
  }

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
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  render() {
    const { data } = this.state;

    return (
      <Container fluid>
        <b>Add new users</b>
        <Divider />
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
        <Form>
          <Form.Input
            label="User first name"
            placeholder="last name"
            type="text"
            name="first_name"
            onChange={e => {
              let { newUser } = this.state;
              newUser.first_name = e.target.value;
              this.setState({ newUser });
            }}
            value={this.state.newUser.first_name}
          />

          <Form.Input
            label="User last name"
            placeholder="last name"
            type="text"
            name="last_name"
            onChange={e => {
              let { newUser } = this.state;
              newUser.last_name = e.target.value;
              this.setState({ newUser });
            }}
            value={this.state.newUser.last_name}
          />
          <Button content="Add" primary size="mini" onClick={this.addUser} />
        </Form>
      </Container>
    );
  }
}
export default AddNewUser;
