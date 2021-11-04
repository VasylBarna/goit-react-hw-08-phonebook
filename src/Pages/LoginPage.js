import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperation from '../redux/Auth/auth-operation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Log in and start working!</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </label>

        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
