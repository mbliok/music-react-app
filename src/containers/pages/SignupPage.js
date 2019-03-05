import React from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import SignupForm from '../../components/forms/SignupForm';

type Props = {
  userSignupRequest: () => void
};

class SignupPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userSignupRequest } = this.props;
    return (
      <div>
        <h1>SignupPage page</h1>
        <SignupForm userSignupRequest={userSignupRequest} />
      </div>
    );
  }
}
export default connect(
  state => {
    return {};
  },
  { userSignupRequest }
)(SignupPage);
