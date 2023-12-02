import { useAuth } from 'hook/useAuth';
import { NavLink } from 'react-router-dom';
import css from './NavigationBar.module.css';

export const NavigationBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
