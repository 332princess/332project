import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../util/isLogin';

export const PrivateRoute = ({ children }) => {
  if (isLogin() === true) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};
