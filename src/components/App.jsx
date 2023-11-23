import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '#services/api';

import { ContactList } from '#components/ContactList/ContactList';
import { ContactForm } from '#components/ContactForm/ContactForm';
import { Filter } from '#components/Filter/Filter';

const App = () => {
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

export default App;
