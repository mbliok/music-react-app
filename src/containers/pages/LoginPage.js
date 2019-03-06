import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/loginAction';
import LoginForm from '../../components/forms/LoginForm';

type Props = {
  loginAction: () => void
};

class LoginPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { loginAction } = this.props;
    return (
      <div>
        <h1>Login page</h1>

        <LoginForm loginAction={loginAction} />
      </div>
    );
  }
}
export default connect(
  null,
  { loginAction }
)(LoginPage);
