import { useDispatch } from 'react-redux';
import { logOut } from '#redux/auth/operation';
import { useAuth } from '#hook/useAuth';
import css from './NavigationUserMenu.module.css';

export const NavigationUserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
