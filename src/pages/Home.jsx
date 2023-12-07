import { NavLink } from 'react-router-dom';
import { useAuth } from '#hook/useAuth';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
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
          pt: '25px', //padding-top
          pb: '25px', //padding-bottom
          borderRadius: '1%',
          borderStyle: 'solid',
          borderWidth: '1px',
          width: '800px',
          ml: 'auto', //margin-left
          mr: 'auto', //margin-right
          //boxShadow: '0 3px 5px 0 #000',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 'h3.fontSize',
            color: '#53a7eb',
          }}
        >
          Welcome to Phonebook
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'normal',
            fontSize: '18px',
            color: '#000',
            padding: '25px',
          }}
        >
          Your phone book is always at hand. From anywhere, all you need is
          Internet access. Phone book with integrated keyword search is
          extremely helpful.
        </Typography>

        {!isLoggedIn && (
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: '16px',
              color: '#000',
              pt: '25px',
            }}
          >
            To use the application, you need to{' '}
            <NavLink to={'/register'}>Sign up</NavLink> or{' '}
            <NavLink to={'/login'}>Sign in</NavLink>
          </Typography>
        )}

        <Typography
          sx={{
            textAlign: 'left',
            fontStyle: 'italic',
            fontSize: '16px',
            color: '#000',
            pl: '25px',
            pt: '25px',
          }}
        >
          Created by{' '}
          <NavLink
            to={
              'https://www.linkedin.com/in/krzysztof-kryczka/'
            }
          >
            <LinkedInIcon />Krzysztof Kryczka
          </NavLink>
        </Typography>
      </Box>
    </Box>
  );
};

// At the moment, React.lazy() does not support using named
// exports for React components. If you wish to use named exports
// containing React components, you need to reexport them as
// default exports in separate intermediate modules.

export { Home as default };
