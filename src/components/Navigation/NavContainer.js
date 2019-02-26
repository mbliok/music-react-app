import React from 'react';

const navContainer = props => (
  <div>
    <div className="nav-bar">
      Logo
      {props.children}
    </div>
  </div>
);
export default navContainer;
