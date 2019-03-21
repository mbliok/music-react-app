import React from 'react';

// import NavContainer from '../Navigation/NavContainer';
// import Navbar from '../Navigation/Navbar';

//type Props = { isLoggedIn: boolean };

const layout = props => (
  // get children as a argument
  // use a "()" instead of brackets "{}" to remove the return function.
  // const SomeComponent = () => (<div> Some Component Page </div>)
  <div>
    <main>
      {/* <NavContainer>
        <Navbar />
      </NavContainer> */}
      {props.children}
    </main>
  </div>
);
export default layout;
