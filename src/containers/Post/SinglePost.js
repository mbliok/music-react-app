import React from 'react';
import axios from 'axios';

type Props = {};

class SinglePost extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      post: null
    };
  }
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get('http://localhost:3004/posts/' + id).then(res => {
      this.setState({
        post: res.data
      });
      console.log(res);
    });
  }
  render() {
    // const { post_title, post_text } = this.state;
    const post = this.state.post ? (
      <div>
        <h2>{this.state.post.post_title}</h2>
        <p>{this.state.post.post_text}</p>
      </div>
    ) : (
      <div />
    );
    return <div>{post}</div>;
  }
}
export default SinglePost;
