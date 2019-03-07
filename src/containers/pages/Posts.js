import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  Container,
  Button,
  Form,
  List,
  Divider,
  Modal
} from 'semantic-ui-react';
import AddPost from '../Post/AddPost';
type Props = {};

class Posts extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      posts: [],
      isAuthenticated: true
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3004/posts')
      .then(res => {
        this.setState({ posts: res.data }); // res.data.slice(0,10)
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <List.Item key={post.id}>
            <Link to={'/' + post.id}>
              <b>{post.post_title}</b>
            </Link>
            <p>{post.post_text}</p>
            <small>{post.author}</small>
            <img src={post.image} alt="Image alt" />
          </List.Item>
        );
      })
    ) : (
      <div>No posts yet</div>
    );
    return (
      <div>
        <h1>Wellcome to BEZ PARI </h1>
        {this.state.isAuthenticated ? (
          <AddPost />
        ) : (
          <Link to="/login">
            <Button>add post</Button>
          </Link>
        )}

        <Container fluid>
          <b>Get all post</b>
          <Divider />
          <List>{postList}</List>
        </Container>
      </div>
    );
  }
}
export default Posts;
