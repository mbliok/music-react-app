import React from 'react';
import { connect } from 'react-redux';
import * as sessionActions from '.././../actions/sessionActions'; //define the logInUser action creator that we're importing from sessionActions here

import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import { bindActionCreators } from 'redux';

type Props = {};

class LoginPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      credentials: { identifier: '', password: '' }
    };
  }

  onChange = e => {
    const field = e.target.name;
    const credentials = this.state.credentials;
    credentials[field] = e.target.value;
    return this.setState({ credentials: credentials });
    console.log(credentials);
  };
  onSubmit = e => {
    e.preventDefault();

    // this.props.loginAction(this.state);
    this.props.actions.logInUser(this.state.credentials);
  };
  render() {
    //  const { identifier, password } = this.state;
    return (
      <div className="right-side">
        <div className="box-center">
          <h1>Login</h1>

          <Form onSubmit={this.onSubmit}>
            {/* a semantic UI attr,!! conver to boolean : error={!!errors.email}  */}
            <Form.Input
              name="identifier"
              label="Username / email"
              placeholder="Username / email"
              type="text"
              onChange={this.onChange}
              value={this.state.credentials.identifier}
            />
            <Form.Input
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              onChange={this.onChange}
              value={this.state.credentials.password}
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};
export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
