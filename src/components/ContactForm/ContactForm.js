import { useState } from 'react';
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from '../../redux/Phonebook/phonebook-operation';
import styles from './ContactForm.module.scss';
import Loader from 'react-loader-spinner';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const nameOptions = { name, phone };

    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(name + ' is already in contacts');
    } else {
      addContact(nameOptions);
    }
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Phone number
        <input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={handleInputChange}
          required
        />
      </label>

      <button className={styles.btn} type="submit">
        Add contact
      </button>
      {isLoading && (
        <Loader
          type="Hearts"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={1000}
        />
      )}
    </form>
  );
}
