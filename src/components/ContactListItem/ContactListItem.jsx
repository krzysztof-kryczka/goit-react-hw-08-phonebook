import React from 'react';
import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';
import { deleteContact } from '#redux/contacts/operation';
import { useLocation, useNavigate } from 'react-router-dom';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const editContact = id => {
    navigate(`${id}/edit`, { state: { from: location } });
  };

  return (
    <li className={css.contacts__item} key={id}>
      <div>
        {name} : {number}
        <button onClick={() => editContact(id)}>Edit</button>
        <button
          className={css.contacts__btn}
          id={id}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
