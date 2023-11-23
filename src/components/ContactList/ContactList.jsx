import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '#services/api';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter.status);
  const error = useSelector(state => state.contacts.error);

  const filterContact = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue?.toLowerCase())
  );

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      {filterContact?.length > 0 ? (
        <ul className={css.contacts__list}>
          {filterContact?.map(({ id, name, number }) => (
            <li className={css.contacts__item} key={id}>
              {name} : {number}
              <button
                className={css.contacts__btn}
                id={id}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        (error && <p>Error: {error}</p>) || <p>No contacts in phoneBook</p>
      )}
    </div>
  );
};
