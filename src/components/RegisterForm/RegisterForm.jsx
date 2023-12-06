import { useDispatch } from 'react-redux';
import { register } from '#redux/auth/operation';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
            Register Page
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
              label="Name"
              type="text"
              name="name"
              placeholder="Username"
            />

            <TextField
              required
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
            />

            <TextField
              required
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
            />

            <Button
              variant="contained"
              size="large"
              endIcon={<HowToRegIcon />}
              type="submit"
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
