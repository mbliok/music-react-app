import React from 'react';
import FacebookLogin from 'react-facebook-login';

type State = {};
type Props = {
  isAuthenticatedWithFb: () => void,
  isLoggedIn: boolean
};

class Facebook extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: ''
    };
  }
  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
    this.props.isAuthenticatedWithFb(response);
  };
  componentClicked = () => {};
  render() {
    let fbContent;
    if (this.props.isLoggedIn) {
      fbContent = (
        <div>
          <img src={this.props.picture} alt={this.props.name} />
          <h2>Welcome {this.props.name}</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="548317945657155" // my fb dev credits
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
export default Facebook;
