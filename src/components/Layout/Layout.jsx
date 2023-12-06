import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavigationBar } from '#components/NavigationBar/NavigationBar';
import { NavigationAuth } from '#components/NavigationAuth/NavigationAuth';
import { NavigationUserMenu } from '#components/NavigationUserMenu/NavigationUserMenu';
import { useAuth } from '#hook/useAuth';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <header>
        <AppBar
          sx={{
            width: '100%',
            height: 'auto',
            top: 0,
            left: 0,
            position: 'sticky',
            borderBottom: '1px solid #2a363b',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <NavigationBar />
            {isLoggedIn ? <NavigationUserMenu /> : <NavigationAuth />}
          </Toolbar>
        </AppBar>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
