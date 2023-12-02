import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element: Component, redirectTo = '/' }) => {
  let isLoggedIn = false;
  return !isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
