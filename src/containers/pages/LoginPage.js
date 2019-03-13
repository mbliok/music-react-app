import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/loginAction';
import LoginForm from '../../components/forms/LoginForm';
// import server from '../../server/server-simulator/server';

type Props = {
  loginAction: () => void
};

class LoginPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLogged: false
    };
  }

  render() {
    const { loginAction } = this.props;
    return (
      <div className="right-side">
        <div className="box-center">
          <h1>Login</h1>
          <div>{this.state.isLoggedTxt}</div>
          <LoginForm loginAction={loginAction} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggedTxt: state.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAction: () => dispatch({ type: 'ISLOGGED' })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
//loginAction
