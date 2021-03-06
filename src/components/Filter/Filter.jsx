import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/Phonebook/phonebook-actions';
import InputForm from '../InputForm/InputForm';

export function FindContact() {
  const dispatch = useDispatch();
  return (
    <div>
      <InputForm
        name={'Find my contact'}
        type="text"
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </div>
  );
}

FindContact.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect(FindContact);