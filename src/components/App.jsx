import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '#services/api';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '#components/Layout/Layout';
import { PrivateRoute } from '#components/PrivateRoute';
import { ProtectedRoute } from '#components/ProtectedRoute';

const Home = lazy(() => import('#pages/Home'));
const Register = lazy(() => import('#pages/Register'));
const Login = lazy(() => import('#pages/Login'));
const Contacts = lazy(() => import('#pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute element={<Register />} redirectTo="/login" />
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute element={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute element={<Contacts />} redirectTo="/login" />}
        />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
