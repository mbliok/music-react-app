import React from 'react';

const navContainer = props => (
  <div>
    <div className="nav-bar">
      <div className="logo">
        <span>Music sheets</span>
        <span className="bigger">Rock</span>
      </div>
      {props.children}
    </div>
  </div>
);
export default navContainer;
