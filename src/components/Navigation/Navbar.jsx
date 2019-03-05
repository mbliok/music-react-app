import React from 'react';
import { NavLink } from 'react-router-dom';

type MenuItem = {
  id: number,
  name: string,
  url: string
};
type State = {
  menuItems: MenuItem[]
};
type Props = {};
class Navbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      menuItems: [
        // {
        //   id: 1,
        //   name: 'Play list',
        //   url: `/playlist`
        // },
        // {
        //   id: 2,
        //   name: 'Users',
        //   url: `/users`
        // },
        {
          id: 3,
          name: 'wellcome',
          url: `/hi`
        },
        {
          id: 4,
          name: 'Sign up',
          url: `/signup`
        }
      ]
    };
  }

  render() {
    return (
      <nav className="navigation">
        <ul>
          {this.state.menuItems.map(menuItem => (
            <li key={menuItem.id} className="route-link">
              <NavLink to={menuItem.url} activeClassName="selected">
                <div className="link-icon-container" />
                <div>{menuItem.name}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
