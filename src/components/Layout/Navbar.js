import React from 'react';
import { Link } from 'react-router-dom';
import SignedLinks from './SignedLinks';
import LogoutLinks from './LogoutLinks';

const Navbar = () => {
  return (
    <div>
      <nav className="navigation">
        <Link to="/">
          <div className="logo">
            <span>Music sheets</span>
            <span className="bigger">Rock</span>
          </div>
        </Link>
        <LogoutLinks />
        <SignedLinks />
      </nav>
    </div>
  );
};
export default Navbar;
