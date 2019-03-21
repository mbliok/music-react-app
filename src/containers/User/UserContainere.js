import React from 'react';
import UsersList from './UsersList';
// import AddNewUser from './AddNewUser';

const userContainer = props => (
  <div>
    <div className="user-container">
      {props.children}
      <UsersList />
      {/* <AddNewUser /> */}
    </div>
  </div>
);
export default userContainer;
