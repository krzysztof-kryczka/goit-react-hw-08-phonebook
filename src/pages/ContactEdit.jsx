import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateContact } from '#redux/contacts/operation';
import { createSelector } from '@reduxjs/toolkit';
import { useState } from 'react';

export const ContactEdit = () => {
  const selectContacts = state => state.contacts.items;

  const selectCurrentContact = createSelector(
    [selectContacts, (_, props) => props.id],
    (contacts, id) => {
      return contacts.find(contact => contact.id === id);
    }
  );

  const { id } = useParams();
  const currentContact = useSelector(state =>
    selectCurrentContact(state, { id })
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(`${currentContact.name}`);
  const [number, setNumber] = useState(`${currentContact.number}`);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContact({ name: name, number: number, id }));
    console.log(`Contact ${name} updated!`);
    navigate(-1);
  };

  let onInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        console.log(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Change name:
          <input
            onChange={onInputChange}
            value={name}
            name="name"
            placeholder="Enter contact`s name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
        <label>
          Change phone:
          <input
            onChange={onInputChange}
            value={number}
            type="tel"
            name="number"
            placeholder="Enter contact`s number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
        </label>
        <button type="submit">UPDATE CONTACT</button>
      </form>
    </>
  );
};

// At the moment, React.lazy() does not support using named
// exports for React components. If you wish to use named exports
// containing React components, you need to reexport them as
// default exports in separate intermediate modules.

export { ContactEdit as default };
