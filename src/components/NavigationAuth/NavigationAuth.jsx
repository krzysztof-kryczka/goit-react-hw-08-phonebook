import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export const NavigationAuth = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <NavLink to="/register">
        {' '}
        <Typography
          variant="h6"
          gutterBottom
          component="p"
          sx={{ m: 2, color: 'white' }}
        >
          🪪 Register
        </Typography>
      </NavLink>
      <NavLink to="/login">
        {' '}
        <Typography
          variant="h6"
          gutterBottom
          component="p"
          sx={{ m: 2, color: 'white' }}
        >
          Log In 🔐
        </Typography>
      </NavLink>
    </Box>
  );
};
