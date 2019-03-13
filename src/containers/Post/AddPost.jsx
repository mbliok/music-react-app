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
        soundUrl: '',
        pdfUrl: ''
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
          soundUrl: '',
          pdfUrl: ''
        }
      });
    });
  };

  render() {
    return (
      <div className="right-side">
        <Container fluid>
          <b>Save, share and publish your music</b>
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
              label="Upload PDF file"
              placeholder="PDF sheets"
              type="file"
              name="file"
              onChange={e => {
                let { newPost } = this.state;
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = e => {
                  newPost.pdfUrl = e.target.result;
                  this.setState({ newPost });
                };
              }}
            />
            <Form.Input
              label="Upload sound format MIDI, MP3..."
              placeholder="Sound file"
              type="file"
              name="file"
              onChange={e => {
                let { newPost } = this.state;
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = e => {
                  newPost.soundUrl = e.target.result;
                  this.setState({ newPost });
                };
              }}
            />
            <Form.Input
              label="Title can be used for searching"
              placeholder="Example: Metallica - Nothing Else Matters"
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
              placeholder="Description"
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
              placeholder="Author name"
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
              placeholder="Band image/logo...extr"
              type="file"
              name="file"
              onChange={e => {
                let { newPost } = this.state;
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = e => {
                  console.warn('img data', e.target.result);
                  newPost.image = e.target.result;
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
