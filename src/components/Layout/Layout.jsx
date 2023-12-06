import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavigationBar } from '#components/NavigationBar/NavigationBar';
import { NavigationAuth } from '#components/NavigationAuth/NavigationAuth';
import { NavigationUserMenu } from '#components/NavigationUserMenu/NavigationUserMenu';
import { useAuth } from '#hook/useAuth';
import css from './Layout.module.css';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <header>
        <NavigationBar />
        {isLoggedIn ? <NavigationUserMenu /> : <NavigationAuth />}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
