import React from 'react';
import Aux from '../../hoc/Aux';

const navContainer = props => (
  <Aux>
    <div className="nav-bar">
      muZa
      {props.children}
    </div>
  </Aux>
);
export default navContainer;
