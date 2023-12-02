import { useDispatch } from 'react-redux';
import { logIn } from '#redux/auth/operation';
import css from './LoginForm.module.css';

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

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <>
        <label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
          />
        </label>
      </>
      <>
        <label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </label>
      </>
      <button type="submit">
        Log In
      </button>
    </form>
  );
};
