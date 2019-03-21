import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/users.action';
import {
  Container,
  Button,
  Form,
  List,
  Divider,
  Modal
} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';

type State = {};
type Props = {};
class UsersList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: false,
      // users: [],
      editUserData: {
        id: '',
        first_name: '',
        last_name: ''
      }
    };
  }

  componentWillMount() {
    //  this.refreshUser();
  }

  // GET all users
  componentDidMount() {
    this.props.getAllUsers();
  }
  updateUser = e => {
    e.preventDefault();
    let { first_name, last_name } = this.state.editUserData;
    axios
      .put('http://localhost:3004/users/' + this.state.editUserData.id, {
        first_name,
        last_name
      })
      .then(res => {
        this.refreshUser();
        this.setState({
          // cleaning inputs field
          editUserData: {
            first_name: '',
            last_name: ''
          }
        });
      });
  };

  editUser = (id, first_name, last_name) => {
    console.log(first_name);
    this.setState({
      editUserData: { id, first_name, last_name }
    });
  };
  refreshUser = () => {
    // axios
    //   .get('http://localhost:3004/users')
    //   .then(res => {
    //     this.setState({ users: res.data });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
  deleteUser = id => {
    axios.delete('http://localhost:3004/users/' + id).then(res => {
      this.refreshUser();
    });
  };
  close = () => this.setState({ open: false });

  render() {
    console.log('User list get from redux', this.props);
    let userList = this.props.users.map(user => {
      return (
        <List.Item key={user.id}>
          {user.id}
          {user.first_name} {user.last_name}
          <Button.Group size="mini">
            <Button
              onClick={this.editUser.bind(
                this,
                user.id,
                user.first_name,
                user.last_name
              )}
            >
              Edit
            </Button>
            <Button.Or />
            <Button onClick={this.deleteUser.bind(this, user.id)}>
              Delete
            </Button>
          </Button.Group>
        </List.Item>
      );
    });
    return (
      <Container fluid>
        <b>Get all users</b>
        <Divider />

        <List>{userList}</List>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  console.log('state.users', state.users);
  return {
    users: state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: bindActionCreators(getAllUsers, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
