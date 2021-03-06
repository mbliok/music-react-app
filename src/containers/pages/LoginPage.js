import React from 'react';

import { connect } from 'react-redux';
// import Facebook from '../../components/forms/Facebook';
import LoginFormRedux from '../../components/forms/LoginFormRedux';

import { login } from '../../actions/auth'; // create  dispatch action login file
type history = {
  push: () => void
};
type Props = {
  history: history
  // login: () => void
};

class LoginPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      postUserData: {
        first_name: '',
        last_name: ''
      }
    };
  }
  // submit = data => {
  //   console.log(data);
  // };
  // we want to take this data and dispatch func action with this data
  //  - in submit func we props a login with data and it will return a promise
  //  - if everythink is ok then redirect to home page using history in then
  // - login() will be avelable when connect this component to redux

  // submit = data =>
  //   this.props.login(data).then(() => this.props.history.push('/'));

  // fbLoggedIn = response => this.props.history.push('/playlist');
  login = () => {
    let { first_name, last_name } = this.state.postUserData;
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }); //username:e.target.value
    // console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Login page</h1>

        {/* <LoginFormRedux submit={this.submit} /> */}
        {/* <Facebook isAuthenticatedWithFb={this.fbLoggedIn} /> */}
      </div>
    );
  }
}
// 1. to connect with reducer. connect has 2 param
//  - mapStateToProps and mapDispatchToProps
//  - mapStateToProps - alow us to pass data from redux state into this component, in my case is nothing/ null
//  - mapDispatchToProps - we call dispatch this action, we dispatch obj login
// 2. create out dispatch action login file (see in import above)
export default LoginPage;
