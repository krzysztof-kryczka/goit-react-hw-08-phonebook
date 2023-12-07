import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateContact } from '#redux/contacts/operation';
import { createSelector } from '@reduxjs/toolkit';
import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import InputAdornment from '@mui/material/InputAdornment';

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
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box
          sx={{
            pt: '45px', //padding-top
            pb: '45px', //padding-bottom
            borderRadius: '5%',
            borderStyle: 'solid',
            borderWidth: '2px',
            width: '600px',
            ml: 'auto', //margin-left
            mr: 'auto', //margin-right
            boxShadow: '0 3px 5px 0 #000',
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 'h3.fontSize',
              fontFamily: 'Monospace',
              letterSpacing: 6,
            }}
          >
            Edit Contact
          </Box>

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
              label="Email"
              type="name"
              name="name"
              placeholder="Enter contact`s name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={onInputChange}
              value={name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              required
              label="Change phone:"
              type="number"
              name="number"
              placeholder="Enter contact`s number"
              onChange={onInputChange}
              value={number}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              size="large"
              endIcon={<ContactPhoneIcon />}
              type="submit"
            >
              UPDATE CONTACT
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

// At the moment, React.lazy() does not support using named
// exports for React components. If you wish to use named exports
// containing React components, you need to reexport them as
// default exports in separate intermediate modules.

export { ContactEdit as default };
