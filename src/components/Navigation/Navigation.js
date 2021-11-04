import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as authSelectors from '../../redux/Auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink exact to="/">
        <h1>Phonebook</h1>
      </NavLink>

      {/* <NavLink exact to="/">
        Home
      </NavLink> */}
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
