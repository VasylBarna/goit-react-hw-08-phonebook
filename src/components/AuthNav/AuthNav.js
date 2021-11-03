import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className="title" activeClassName="title--active">
        Registration
      </NavLink>

      <NavLink to="/login" className="title" activeClassName="title--active">
        Sign in
      </NavLink>
    </div>
  );
}
