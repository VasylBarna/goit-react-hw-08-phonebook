import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/Auth';
import { NavItem, NavList } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <NavList>
      <NavItem componentClass={Link}>
        <NavLink
          exact
          to="/contacts"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Contacts
        </NavLink>
      </NavItem>
      <NavItem componentClass={Link}>
        <NavLink exact to="/logout">
          <Link to="/logout" onClick={() => dispatch(authOperations.logOut())}>
            Log out
          </Link>
        </NavLink>
      </NavItem>
    </NavList>
  );
};
