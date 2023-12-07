import { useDispatch } from 'react-redux';
import { logIn } from '#redux/auth/operation';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import PasswordIcon from '@mui/icons-material/Password';
import * as React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
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
            Login Page
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
              type="email"
              name="email"
              placeholder="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              required
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              size="large"
              endIcon={<VpnKeyIcon />}
              type="submit"
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
