import React from 'react';
import { NavLink } from 'react-router-dom';

const LogoutLinks = () => {
  return (
    <div>
      <ul>
        <li className="route-link">
          <NavLink to="/signup">Sign up</NavLink>
        </li>
        <li className="route-link">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default LogoutLinks;
