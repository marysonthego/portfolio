/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Navigate} from 'react-router-dom';
import 'components/dashboard/css/pages/login/login-1.scss';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'components/dashboard/redux/userSlice';

  export function AuthPage() {
  const currentUser = useSelector(selectCurrentUser);
  console.log(`AuthPage currentUser:`, currentUser);
  
  return (
    <div>
      { currentUser.isLoggedIn === 1
      ? (
        <Navigate to="/dashboard" />
      ) : (
        <>
          <Navigate from="/login" to="/dashboard" />;
          <Navigate to="/login" />
        </>
      )}
    </div>
  );
};
