import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '#redux/contacts/operation';
import { useLocation, useNavigate } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const editContact = id => {
    navigate(`${id}/edit`, { state: { from: location } });
  };

  const firstLetter = name.slice(0, 1).toUpperCase();

  return (
    <>
      <ListItem
        key={id}
        secondaryAction={
          <>
            <Button
              id={id}
              variant="outlined"
              disableElevation
              onClick={() => editContact(id)}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>{' '}
            <Button
              id={id}
              variant="contained"
              disableElevation
              onClick={() => dispatch(deleteContact(id))}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </>
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              sx={{
                bgcolor: getRandomHexColor(),
              }}
            >
              {firstLetter}
            </Avatar>
          </ListItemAvatar>
          <ListItemText id={id} primary={`${name}: ${number}`} />
        </ListItemButton>
      </ListItem>
    </>
  );
};
