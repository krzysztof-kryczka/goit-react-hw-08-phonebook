import { NavLink } from 'react-router-dom';
import css from './NavigationAuth.module.css';

export const NavigationAuth = () => {
  return (
    <nav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </nav>
  );
};
