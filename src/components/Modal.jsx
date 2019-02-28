// @flow

import React from 'react';

type Props = {
  children: any,
  itemId: number,
  itemName: string,
  itemsheet: any,
  itemsound: any
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
        itemsheet={this.props.itemsheet}
        itemsound={this.props.itemsound}
      >
        {this.props.itemName}
        {/* {this.props.itemsheet}
        {this.props.itemsound} */}
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
