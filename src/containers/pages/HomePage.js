import React from 'react';

type Props = {};

class HomePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Home page 1</h1>
      </div>
    );
  }
}
export default HomePage;
