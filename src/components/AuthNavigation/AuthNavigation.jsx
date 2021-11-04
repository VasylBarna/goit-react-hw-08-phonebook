import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavItem, NavList } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <NavList>
      
      <NavItem componentClass={Link}>
        <NavLink
          exact
          to="/registration"
          className="NavLink"
          activeClassName="NavLink--active"
        >
         Registration
        </NavLink>
      </NavItem>
      <NavItem componentClass={Link}>
        <NavLink
          exact
          to="/autorization"
          className="NavLink"
          activeClassName="NavLink--active"
        >
           Sign in          
        </NavLink>
      </NavItem>
    </NavList>
  );
};