import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '#services/api';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();
    let exist = false;

    contacts.forEach(contact => {
      if (contact.name.toLowerCase().trim() === name.toLowerCase().trim()) {
        alert(`${name} is already in contacts`);
        exist = true;
      }
    });

    if (!exist) {
      dispatch(addContact({ id, name, number }));
    }
    e.target.reset();
  };

  return (
    <>
      <div className={css.form}>
        <h2 className={css.form__title}>Phonebook</h2>
        <form className={css.form__form} onSubmit={handleSubmit}>
          <label className={css.form__label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            className={css.form__input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.form__label} htmlFor="number">
            Number
          </label>
          <input
            type="tel"
            name="number"
            className={css.form__input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.form__btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </>
  );
};
