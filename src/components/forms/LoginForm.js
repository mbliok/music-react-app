import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import Errors from './Errors';

type State = {};
type Props = {
  loginAction: () => void,
  router: {}
};
// LoginForm.contextType = {
//   router: React.PropsTypes.object.isRequired
// };
class LoginForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      identifier: '',
      password: ''
    };
  }

  // 1. need to change data
  // 2. but first need to save all that I have in data, so I'm using the spred opr  ...this.state.data
  // 3. and then we actualy whant to change in [[e.target.name]: e.target.value]
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    // to do errors:{}
    //  this.setState({ isLoading: true });
    this.props.loginAction(this.state);
    // .then(
    //   res => this.context.router.push('/hi')
    // );
  };

  // the validate function
  //validate
  render() {
    const { identifier, password } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          {/* a semantic UI attr,!! conver to boolean : error={!!errors.email}  */}
          <Form.Input
            name="identifier"
            label="Username / email"
            placeholder="Username / email"
            type="text"
            onChange={this.onChange}
            value={identifier}
          />
          <Form.Input
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            onChange={this.onChange}
            value={password}
          />
          <Button basic color="purple">
            Login
          </Button>
          <Link to="/signup">
            <Button basic inverted>
              Sign up
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}
export default LoginForm;
