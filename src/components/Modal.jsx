// @flow

import React from 'react';

type Props = {
  children: any,
  itemId: number,
  itemName: string,
  itemSheet: any,
  itemSound: any
};
type State = {};
class Modal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="modal-body"
        itemId={this.props.itemId}
        itemName={this.props.itemName}
        itemSheet={this.props.itemSheet}
        itemSound={this.props.itemSound}
      >
        {this.props.itemName}
        {/* {this.props.itemSheet}
        {this.props.itemSound} */}
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
