import React from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Form,
  List,
  Divider,
  TextArea
} from 'semantic-ui-react';
import ImageUploader from 'react-images-upload';

type State = {};
type Props = {};
class AddPost extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      posts: [],
      newPost: {
        post_title: '',
        post_text: '',
        author: '',
        image: ''
      }
    };
  }

  // Add new user v2
  addPost = e => {
    e.preventDefault();
    axios.post(`http://localhost:3004/posts`, this.state.newPost).then(res => {
      console.log(res.data);

      let { posts } = this.state;

      posts.push(res.data);
      this.setState({
        posts,
        newPost: {
          post_title: '',
          post_text: '',
          image: '',
          author: ''
        }
      });
    });
  };

  render() {
    // const { data } = this.state;

    return (
      <Container fluid>
        <b>Add post</b>
        <Divider />

        <Form>
          <Form.Input
            label="Title"
            placeholder="Post title"
            type="text"
            name="post_title"
            onChange={e => {
              let { newPost } = this.state;
              newPost.post_title = e.target.value;
              this.setState({ newPost });
            }}
            value={this.state.newPost.post_title || ''}
          />
          <Form.TextArea
            name="post_text"
            placeholder="Tell us more"
            rows={4}
            onChange={e => {
              let { newPost } = this.state;
              newPost.post_text = e.target.value;
              this.setState({ newPost });
            }}
            value={this.state.newPost.post_text || ''}
          />
          <Form.Input
            label="Author"
            placeholder="Your name"
            type="text"
            name="author"
            onChange={e => {
              let { newPost } = this.state;
              newPost.author = e.target.value;
              this.setState({ newPost });
            }}
            value={this.state.newPost.author || ''}
          />
          <Form.Input
            label="Upload image"
            placeholder="Upload image"
            type="file"
            name="file"
            onChange={e => {
              let { newPost } = this.state;
              let reader = new FileReader();
              newPost.image = e.target.files;
              reader.readAsDataURL(e.target.files[0]);
              reader.onload = e => {
                console.warn('img data', e.target.result);
                this.setState({ newPost });
              };
            }}
          />

          <Button content="Add" primary size="mini" onClick={this.addPost} />
        </Form>
      </Container>
    );
  }
}
export default AddPost;
