import React from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import { Divider } from 'semantic-ui-react';
// import { getAllPosts } from '../../actions/posts.action';
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
    const post = this.state.post ? (
      <div>
        <div className="single-view">
          <div className="pdf-preview">
            <object
              width="800"
              height="700"
              data={this.state.post.pdfUrl}
              type="application/pdf"
            />
          </div>
          <div className="single-info">
            <h2>{this.state.post.post_title}</h2>
            <Divider />

            <p>{this.state.post.post_text}</p>
            <small>{this.state.post.author}</small>
          </div>
        </div>

        <div className="sound-player">
          <AudioPlayer
            autoPlay={false}
            src={this.state.post.soundUrl}
            onPlay={e => console.log('onPlay')}
          />
        </div>
      </div>
    ) : (
      <div />
    );
    return <div>{post}</div>;
  }
}
// const mapStateToProps = (state, ownProps) => {
//   let id = ownProps.match.params.post_id; // get from App.js path="/:post_id"
//   console.log('post is is', id, state);
//   return {
//     post: state.posts.find(post => post.id === id)
//   };
// };
// export default connect(mapStateToProps)(SinglePost);
export default SinglePost;
