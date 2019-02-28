import React from 'react';

import Facebook from '../../components/forms/Facebook';

type Props = {
  history: history
};
type history = {
  push: () => void
};
class HomePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  fbLoggedIn = response => this.props.history.push('/playlist');
  render() {
    return (
      <div>
        <h1>Home page</h1>
      </div>
    );
  }
}
export default HomePage;
