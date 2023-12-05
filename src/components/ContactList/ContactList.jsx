import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

import { ContactListItem } from '#components/ContactListItem/ContactListItem';

export const ContactList = () => {

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
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        (error && <p>Error: {error}</p>) || <p>No contacts in phoneBook</p>
      )}
    </div>
  );
};
