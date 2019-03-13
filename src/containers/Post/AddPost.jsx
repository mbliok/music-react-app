import React from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Form,
  List,
  Divider,
  TextArea,
  Icon
} from 'semantic-ui-react';
import AudioPlayer from 'react-h5-audio-player';

type State = {};
type Props = {
  Close: () => void
};
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
        image: '',
        soundUrl: ''
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
          category: '',
          image: '',
          author: '',
          soundUrl: ''
        }
      });
    });
  };

  render() {
    return (
      <div className="right-side">
        <Container fluid>
          <b>Add post</b>
          <Icon
            link
            name="close"
            color="purple"
            onClick={this.props.Close}
            style={{ float: 'right', cursor: 'pointer' }}
          />

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
              label="Tell us more"
              name="post_text"
              placeholder=""
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
              label="Category"
              placeholder="instrumental category"
              type="text"
              name="category"
              onChange={e => {
                let { newPost } = this.state;
                newPost.category = e.target.value;
                this.setState({ newPost });
              }}
              value={this.state.newPost.category || ''}
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
                  console.warn(newPost);
                  this.setState({ newPost });
                };
              }}
            />
            <Form.Input
              label="Upload sound"
              placeholder="Upload sound"
              type="file"
              name="file"
              onChange={e => {
                let { newPost } = this.state;
                let reader = new FileReader();
                newPost.soundUrl = e.target.files;
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = e => {
                  console.warn('sound data', e.target.result);
                  console.warn(newPost);
                  this.setState({ newPost });
                };
              }}
            />
            <Button content="Add" basic color="purple" onClick={this.addPost} />
          </Form>
        </Container>
      </div>
    );
  }
}
export default AddPost;
