import { NavLink } from 'react-router-dom';
import { useAuth } from '#hook/useAuth';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <h1>Welcome to Phonebook</h1>
      <p>
        Your phone book is always at hand. From anywhere, all you need is
        Internet access. Phone book with integrated keyword search is extremely
        helpful.
      </p>

      {!isLoggedIn && (
        <p>
          To use the application, you need to{' '}
          <NavLink to={'/register'}>Sign up</NavLink> or{' '}
          <NavLink to={'/login'}>Sign in</NavLink>
        </p>
      )}
    </div>
  );
};

// At the moment, React.lazy() does not support using named
// exports for React components. If you wish to use named exports
// containing React components, you need to reexport them as
// default exports in separate intermediate modules.

export { Home as default };
