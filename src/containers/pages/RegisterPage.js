import React from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import RegisterForm from '../../components/forms/RegisterForm';

type Props = {
  userSignupRequest: () => void
};

class RegisterPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="right-side">
        <div className="box-center">
          <h1>Sign up </h1>
          <RegisterForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    );
  }
}
export default connect(
  // state => {
  //   return {};
  // },
  null,
  { userSignupRequest }
)(RegisterPage);
