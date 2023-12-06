import { useDispatch } from 'react-redux';
import { logOut } from '#redux/auth/operation';
import { useAuth } from '#hook/useAuth';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

export const NavigationUserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        component="h3"
        sx={{ m: 2, color: 'white', width: '100%' }}
      >
        Welcome, {user.name}!
      </Typography>

      <Button
        variant="contained"
        size="large"
        type="button"
        endIcon={<MeetingRoomIcon />}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
