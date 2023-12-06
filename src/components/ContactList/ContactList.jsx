import { useSelector } from 'react-redux';
import { ContactListItem } from '#components/ContactListItem/ContactListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter.status);
  const error = useSelector(state => state.contacts.error);

  const filterContact = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue?.toLowerCase())
  );

  return (
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
        {`Contacts List`}
      </Typography>
      {filterContact?.length > 0 ? (
        <List sx={{ width: '120ch' }}>
          {filterContact?.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      ) : (
        (error && <p>Error: {error}</p>) || (
          <Typography
            variant="p"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 'h5.fontSize',
              color: '#ff4400',
            }}
          >
            {`No contacts in phoneBook`}
          </Typography>
        )
      )}
    </Box>
  );
};
