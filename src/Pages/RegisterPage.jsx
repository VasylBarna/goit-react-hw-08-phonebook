import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import InputForm from '../components/InputForm/InputForm';
import registerForm from '../components/data/registerForm.json';
import { authOperations } from '../redux/Auth';
import { Section } from '../components/Section/Section';
import { ButtonPhonebook } from '../components/Button/Button.styled';

export default function RegistrationPageView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const handleChange = ({ name }, value) => {
    switch (name) {
      case 'Name':
        setName(() => value);
        break;
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
    dispatch(authOperations.register({ name, email, password }));
    reset(e);
  };

  const reset = e => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <>
          {registerForm.map(({ name, id }) => (
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
