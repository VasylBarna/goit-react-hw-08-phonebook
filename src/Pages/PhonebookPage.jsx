
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { ContactList } from '../components/ContactsList/ContactsList';
import { FindContact } from '../components/Filter/Filter';
import { Section } from '../components/Section/Section';

export default function ContactsPage() {
  return (
    <Section>
      <FindContact title={'Find contacts by name'} />
      <ContactList />
      <Link to="/create-contact">
        <Button type='submit' className="button-add">Create contact</Button>
      </Link>
     </Section>
  );
}
