/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
//import { ContentRoute } from 'components/dashboard/components/layout/ContentRoute';
import { Login } from 'components/dashboard/pages/Login';
import { Logout } from 'components/dashboard/pages/Logout';
import { ForgotPasswordPage } from 'components/dashboard/pages/ForgotPasswordPage';
import { DashboardPage } from 'components/dashboard/pages/DashboardPage';
import { ProfileStepper } from 'components/dashboard/pages/ProfileStepper';
import { UserProfilePage } from 'components/dashboard/pages/UserProfilePage';
import 'components/dashboard/css/pages/login/login-1.scss';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'components/dashboard/redux/userSlice';

//function Routing() {
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
//export const AuthPage = Routing;
