import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Aux from '../../hoc/Aux';

type MenuItem = {
  id: number,
  name: string,
  url: string,
  img?: any
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
        {
          id: 1,
          name: 'Play list',
          url: `/playlist`
          //  img: userImg,
        },
        {
          id: 2,
          name: 'Users',
          url: `/users`
          // img: onlineImg,
        },
        {
          id: 3,
          name: 'Home page',
          url: `/`
          // img: onlineImg,
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
                <div className="link-icon-container">
                  {/* <img src={menuItem.img} alt={menuItem.name} />{' '} */}
                </div>
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
