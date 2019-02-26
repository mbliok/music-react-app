import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../../components/forms/LoginForm';
import { login } from '../../actions/auth'; // create out dispatch action login file
import axios from 'axios';
type Props = {
  history: history,
  login: () => void
};
type history = {
  push: () => void
};
class LoginPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  // submit = data => {
  //   console.log(data);
  // };
  // we want to take this data and dispatch func action with this data
  //  - in submit func we props a login with data and it will return a promise
  //  - if everythink is ok then redirect to home page using history in then
  // - login() will be avelable when connect this component to redux

  submit = data =>
    this.props.login(data).then(() => this.props.history.push('/'));

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
// 1. to connect with reducer. connect has 2 param
//  - mapStateToProps and mapDispatchToProps
//  - mapStateToProps - alow us to pass data from redux state into this component, in my case is nothing/ null
//  - mapDispatchToProps - we call dispatch this action, we dispatch obj login
// 2. create out dispatch action login file (see in import above)
export default connect(
  null,
  { login }
)(LoginPage);
