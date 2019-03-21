import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewUser } from '../../actions/newUser.action';
import {
  Container,
  Button,
  Form,
  List,
  Divider,
  Modal
} from 'semantic-ui-react';
type Props = {};

class RegisterPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.addNewUser(this.state);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="right-side">
        <div className="box-center">
          <h1>Sign up </h1>
          <Form onSubmit={this.onSubmit}>
            <Form.Input
              label="First name"
              placeholder="last name"
              type="text"
              name="first_name"
              onChange={this.onChange}
              value={this.state.first_name || ''}
            />

            <Form.Input
              label="Last name"
              placeholder="last name"
              type="text"
              name="last_name"
              onChange={this.onChange}
              value={this.state.last_name || ''}
            />
            <Form.Input
              label="Email"
              placeholder="email"
              type="text"
              name="email"
              onChange={this.onChange}
              value={this.state.email || ''}
            />
            <Form.Input
              label="password"
              placeholder="password"
              type="password"
              name="password"
              onChange={this.onChange}
              value={this.state.password || ''}
            />
            <Button basic color="purple">
              Sign up
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    newTodo: state.newTodo
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addNewUser: bindActionCreators(addNewUser, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
