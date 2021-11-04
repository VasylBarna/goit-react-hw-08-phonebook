import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperation from '../redux/Auth/auth-operation';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
    dispatch(authOperation.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Create your phonebook</h1>
      <p>Go to the registration form!</p>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          ></input>
        </label>

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
