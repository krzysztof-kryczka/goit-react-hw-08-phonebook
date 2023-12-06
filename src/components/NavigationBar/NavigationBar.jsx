import { useAuth } from '#hook/useAuth';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const NavigationBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <NavLink to="/">
        {' '}
        <Typography
          variant="h6"
          gutterBottom
          component="p"
          sx={{ m: 2, color: 'white' }}
        >
          📲HOME
        </Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Typography
            variant="h6"
            gutterBottom
            component="p"
            sx={{ m: 2, color: 'white' }}
          >
            CONTACTS
          </Typography>
        </NavLink>
      )}
    </Box>
  );
};
