import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '#redux/contacts/operation';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 'h4.fontSize',
            color: '#53a7eb',
          }}
        >
          {`Phonebook`}
        </Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '60ch' },
            display: 'flex',
            flexDirection: 'column',
            width: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            ml: 'auto', //margin-left
            mr: 'auto', //margin-right
          }}
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            required
            label="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />

          <TextField
            required
            label="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />

          <Button
            variant="contained"
            size="large"
            startIcon={<PersonAddIcon />}
            type="submit"
          >
            Add contact
          </Button>
        </Box>
      </Box>
    </>
  );
};
