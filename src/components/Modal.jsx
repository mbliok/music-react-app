// @flow

import React from 'react';

type Props = {
  children: any,
  itemid: number,
  itemname: string,
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
        itemid={this.props.itemid}
        itemname={this.props.itemname}
        itemsheet={this.props.itemsheet}
        itemsound={this.props.itemsound}
      >
        {this.props.itemname}
        {/* {this.props.itemsheet}
        {this.props.itemsound} */}
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
