import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Aux';

type State = {};
type Props = {};
class User extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  //   onViewMusicList = () => {
  //     let path = `/`;
  //     this.props.history.push(path);
  //   };

  render() {
    return (
      <Aux>
        <div>
          User component
          <Link to="/">Go Back to sheets list</Link>
          {/* <button onClick={this.onViewClientProfile}> go to music list</button> */}
        </div>
      </Aux>
    );
  }
}
export default User;
