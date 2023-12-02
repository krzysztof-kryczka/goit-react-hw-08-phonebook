import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '#redux/contacts/operation';
import { ContactList } from '#components/ContactList/ContactList';
import { ContactForm } from '#components/ContactForm/ContactForm';
import { Filter } from '#components/Filter/Filter';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

// At the moment, React.lazy() does not support using named
// exports for React components. If you wish to use named exports
// containing React components, you need to reexport them as
// default exports in separate intermediate modules.

export { Contacts as default };
