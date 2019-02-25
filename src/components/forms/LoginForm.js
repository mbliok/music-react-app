import React from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import Errors from './Errors';

type State = {};
type Props = {
  submit: () => void // pass func to parent component (LoginPage)
};
class LoginForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: {}, // is a obj where I store all form data
      email: '',
      password: '',
      loading: false,
      errors: {}
    };
  }

  // 1. need to change data
  // 2. but first need to save all that I have in data, so I'm using the spred opr  ...this.state.data
  // 3. and then we actualy whant to change in [[e.target.name]: e.target.value]
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  // 1. need to validate data
  // 2. pass it to submit function
  // 3. handle error in cases if have
  onSubmit = () => {
    // 1. validate
    const errors = this.validate(this.state.data); // this func will return a obj
    this.setState({ errors });

    // pass date to fun onSubmit
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {}; // this error obj will be empty if everything is ok
    // a validator method
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = 'Can not be blank';
    return errors;
  };
  // the validate function
  //validate
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h2>Login Form</h2>
        <Form onSubmit={this.onSubmit}>
          {/* a semantic UI attr,!! conver to boolean : error={!!errors.email}  */}
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email@email.com"
              value={data.email || ''}
              onChange={this.onChange}
            />
            {errors.email && <Errors text={errors.email} />}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******"
              value={data.password || ''}
              onChange={this.onChange}
            />
            {errors.password && <Errors text={errors.password} />}
          </Form.Field>
          <Button primary>Login</Button>
        </Form>
      </div>
    );
  }
}
export default LoginForm;
