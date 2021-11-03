import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFetchContactsQuery } from '../redux/Phonebook/phonebook-operation';
import * as authSelectors from '../redux/Auth/auth-selectors';
import ContactsForm from '../components/ContactForm';
import ContactsList from '../components/ContactsList';
import Filter from '../components/Filter';

export default function PhonebookView() {
  const [contacts, setContacts] = useState([]);

  const { data, isFetching } = useFetchContactsQuery();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (data) {
      setContacts(data);
    }
  }, [data]);

  const handleFilterContacts = filter => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();

      return setContacts(
        contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter),
        ),
      );
    } else {
      setContacts(data);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <section>
            <ContactsForm />
          </section>

          <section>
            <h2>Contacts</h2>
            <Filter filter={handleFilterContacts} />
            <ContactsList contacts={contacts} isFetching={isFetching} />
          </section>
        </div>
      ) : (
        <div>
          <h1>Please log in to access your phonebook</h1>
        </div>
      )}
    </>
  );
}
