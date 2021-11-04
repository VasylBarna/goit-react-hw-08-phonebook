
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/Auth';
import loginForm from '../components/data/loginForm.json';
import InputForm from '../components/InputForm/InputForm';
import { ButtonPhonebook } from '../components/Button/Button.styled';
import { Section } from '../components/Section/Section';

export default function SingUpPageView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ name }, value) => {
    switch (name) {
      case 'Email':
        setEmail(() => value);
        break;
      case 'Password':
        setPassword(() => value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset(e);
  };

  const reset = e => {
    setEmail('');
    setPassword('');

  };
  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <>
          {loginForm.map(({ name, id }) => (
            <InputForm
              key={id}
              name={name}
              onChange={event => handleChange({ name }, event.target.value)}
            />
          ))}
        </>
        <ButtonPhonebook variant="primary" type="submit">
          Submit
        </ButtonPhonebook>
      </Form>
     </Section>
  );
}
