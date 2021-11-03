import { useDispatch, useSelector } from 'react-redux';
import * as authSelectors from '../../redux/Auth/auth-selectors';
import * as authOperations from '../../redux/Auth/auth-operation';

export default function AuthNav() {
  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>
          Welcome, <span>{name}</span>
        </span>
        <span>({email})</span>
        <button type="button" onClick={() => dispatch(authOperations.logOut())}>
          Log Out
        </button>
      </div>
    </div>
  );
}
