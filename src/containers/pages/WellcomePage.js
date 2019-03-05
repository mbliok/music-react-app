import React from 'react';

type Props = {};

class WellcomePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Wellcome Page </h1>
      </div>
    );
  }
}
export default WellcomePage;
