import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/forms/LoginForm';

class LoginPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  submit = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Login page</h1>
        {/* NOTE: - dispatch func action to make synchronous  request,
             - get data back,
             - update our reducer in redux store
             - and redirect
             - the purpouse of the form is just to colect data and validate */}
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}
export default LoginPage;
