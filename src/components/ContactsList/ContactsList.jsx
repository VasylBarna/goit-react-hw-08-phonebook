import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { ItemContact } from './Contacts.styled';
import { ItemListContact } from './Contacts.styled';
import { ButtonPhonebook }  from '../Button/Button.styled';
import { List } from './Contacts.styled';
import { getListContact } from '../../redux/Phonebook/phonebook-selectors';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/Phonebook/phonebook-operation';

export function ContactList() {
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const contacts = useSelector(state => getListContact(data, state));
  const contactDelete = id => {
    deleteContact(id);
    toast.success('Your contact has been deleted');
  };
  return (
    <List>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <ItemListContact key={id}>
            <ItemContact>{name}:</ItemContact>
            <ItemContact>{number}</ItemContact>
            <ButtonPhonebook
              type="button"
              onClick={() => contactDelete(id)}

            >Delete
            </ButtonPhonebook>
          </ItemListContact>
        ))}
    </List>
  );
}

ContactList.propTypes = {
  phonebook: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.func,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};

export default connect(ContactList);
