import React from 'react';

import {
  Container,
  Button,
  Form,
  List,
  Divider,
  Modal
} from 'semantic-ui-react';
type Props = {
  userSignupRequest: () => void
};

class SignupForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: ''
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
    // axios.post(`http://localhost:3004/users`, this.state.newUser).then(res => {
    //   console.log(res.data);

    //   let { users } = this.state;

    //   users.push(res.data);
    //   this.setState({
    //     users,
    //     newUser: {
    //       first_name: '',
    //       last_name: '',
    //       email: ''
    //     }
    //   });
    // });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    // const { data } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Input
            label="User first name"
            placeholder="last name"
            type="text"
            name="first_name"
            onChange={this.onChange}
            value={this.state.first_name || ''}
          />

          <Form.Input
            label="User last name"
            placeholder="last name"
            type="text"
            name="last_name"
            onChange={this.onChange}
            value={this.state.last_name || ''}
          />
          <Form.Input
            label=""
            placeholder="email"
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.state.email || ''}
          />

          <Button primary>Sign up</Button>
        </Form>
      </div>
    );
  }
}
export default SignupForm;
