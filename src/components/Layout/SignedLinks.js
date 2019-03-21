import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedLinks = () => {
  return (
    <div>
      <ul>
        <li className="route-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="route-link">
          <NavLink to="/users">Users</NavLink>
        </li>

        <li className="route-link">
          <NavLink to="/">Log out</NavLink>
        </li>
        <li className="route-link">
          <NavLink to="/" className="initials">
            <small>Hello, </small>MB
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default SignedLinks;
