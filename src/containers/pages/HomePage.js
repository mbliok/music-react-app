import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  Container,
  Button,
  Form,
  TextArea,
  List,
  Divider,
  Modal,
  Icon
} from 'semantic-ui-react';
import { getAllPosts } from '../../actions/posts.action';
import AddPost from '../Post/AddPost';

import defImg from '../../assets/img/body-wallpaper.jpg';

type Props = {};

class HomePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // posts: [],
      isAuthenticated: true,
      isBoxOpen: false,
      isPostEditBox: false,
      search: '',
      isLoading: false,
      editPostData: {
        id: '',
        post_title: '',
        post_text: ''
      }
    };
  }
  componentWillMount() {
    this.refreshPost();
  }
  componentDidMount() {
    this.props.getAllPosts();
  }
  refreshPost = () => {
    axios
      .get('http://localhost:3004/posts')
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  updatePost = e => {
    e.preventDefault();
    let { post_title, post_text } = this.state.editPostData;
    axios
      .put('http://localhost:3004/posts/' + this.state.editPostData.id, {
        post_title,
        post_text
      })
      .then(res => {
        this.refreshPost();
        this.setState({
          isPostEditBox: false,
          editPostData: {
            post_title: '',
            post_text: ''
          }
        });
      });
  };
  editPost = (id, post_title, post_text) => {
    this.setState({
      isPostEditBox: true,
      isBoxOpen: false,
      editPostData: { id, post_title, post_text }
    });
  };
  deletePost = id => {
    axios.delete('http://localhost:3004/posts/' + id).then(res => {
      this.refreshPost();
    });
  };
  openBox = () => {
    this.setState({ isBoxOpen: !this.state.isBoxOpen, isPostEditBox: false });
  };
  closeBox = () => {
    this.setState({ isBoxOpen: false, isPostEditBox: false });
  };
  updateSearch = e => {
    this.setState({
      isLoading: true,
      search: e.target.value.substr(0, 20)
    });
  };

  render() {
    let filteredPosts = this.props.posts.filter(post => {
      return (
        post.post_title
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    const postList = filteredPosts.length ? (
      filteredPosts.map(post => {
        // if (post.category === 'piano') {
        return (
          <List.Item key={post.id}>
            <div className="list-music">
              <div className="img-container">
                {post.image ? (
                  <div>
                    <img src={(`data:image/png;base64`, `${post.image}`)} />
                  </div>
                ) : (
                  <div>
                    <img src={defImg} alt="default img" />
                  </div>
                )}
              </div>

              <div className="list-music-info">
                <div>
                  <Link to={'/' + post.id}>
                    <b>{post.post_title}</b>
                  </Link>
                  <p>{post.post_text}</p>
                  Category: {post.category}
                </div>
              </div>
              <Button.Group>
                <Button
                  icon
                  basic
                  color="purple"
                  onClick={this.editPost.bind(
                    this,
                    post.id,
                    post.post_title,
                    post.post_text,
                    post.image
                  )}
                >
                  <Icon name="pencil alternate" />
                </Button>
                <Button
                  icon
                  basic
                  color="purple"
                  onClick={this.deletePost.bind(this, post.id)}
                >
                  <Icon name="delete" />
                </Button>
              </Button.Group>
            </div>
          </List.Item>
        );
        // }
        //  else {
        //   return <div>All</div>;
        // }
      })
    ) : (
      <div className="empty-result">
        Nothing found for " <h3>{this.state.search}</h3> "
      </div>
    );
    return (
      <div className="flex-fluid">
        <div className="left-container">
          <Divider />
          <input
            autoFocus
            type="text"
            placeholder="Start typing band name or song name..."
            name="search"
            className="search-field"
            onChange={this.updateSearch}
            value={this.state.search}
          />
          <Button
            icon
            basic
            color="purple"
            labelPosition="left"
            onClick={this.openBox}
          >
            <Icon name="upload" />
            Upload
          </Button>

          <div className="list-container">
            <List>{postList}</List>
          </div>
        </div>
        {this.state.isBoxOpen && (
          <div className="right-container">
            {this.state.isAuthenticated ? (
              <AddPost Close={this.closeBox} />
            ) : (
              <Link to="/login">
                <Button basic color="purple">
                  Add you sheet / login
                </Button>
              </Link>
            )}
          </div>
        )}
        {this.state.isPostEditBox && (
          <div className="right-container">
            <div className="right-side">
              <Container fluid>
                <b>Edit post</b>
                <Icon
                  link
                  name="close"
                  color="purple"
                  onClick={this.closeBox}
                  style={{ float: 'right', cursor: 'pointer' }}
                />

                <Divider />
                <Form>
                  <Form.Input
                    label="Post title"
                    placeholder="Edit post title"
                    type="text"
                    name="post_title"
                    onChange={e => {
                      let { editPostData } = this.state;
                      editPostData.post_title = e.target.value;
                      this.setState({ editPostData });
                    }}
                    value={this.state.editPostData.post_title || ''}
                  />
                  <Form.TextArea
                    label="Post body"
                    placeholder="Edit post content"
                    rows={6}
                    name="post_text"
                    onChange={e => {
                      let { editPostData } = this.state;
                      editPostData.post_text = e.target.value;
                      this.setState({ editPostData });
                    }}
                    value={this.state.editPostData.post_text || ''}
                  />
                  <Button
                    content="Save changes"
                    basic
                    color="purple"
                    onClick={this.updatePost}
                  />
                </Form>
              </Container>
            </div>
          </div>
        )}
      </div>
    );
  }
}
// get what data we want and map it to the props
const mapStateToProps = state => {
  console.log('state.users', state.posts);
  return {
    posts: state.posts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: bindActionCreators(getAllPosts, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
