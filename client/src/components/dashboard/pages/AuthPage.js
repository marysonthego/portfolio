/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Routes, Navigate } from 'react-router-dom';
import { ContentRoute } from 'components/dashboard/components/layout/ContentRoute';
import { Login } from 'components/dashboard/pages/Login';
import { Logout } from 'components/dashboard/pages/Logout';
import { ForgotPasswordPage } from 'components/dashboard/pages/ForgotPasswordPage';
import { DashboardPage } from 'components/dashboard/pages/DashboardPage';
import { ProfileStepper } from 'components/dashboard/pages/ProfileStepper';
import { UserProfilePage } from 'components/dashboard/pages/UserProfilePage';
import 'components/dashboard/css/pages/login/login-1.scss';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'components/dashboard/redux/userSlice';

function Routing() {
  const currentUser = useSelector(selectCurrentUser);
  console.log(`AuthPage currentUser:`, currentUser);
  
  return (
    <div>
      { currentUser.isLoggedIn === 1
      ? (
        <Routes>
          <ContentRoute path="/dashboard" component={DashboardPage} />
          <ContentRoute exact path="/user-profile" component={UserProfilePage} />
          <ContentRoute exact path="/logout" component={Logout} />
          {/* <Navigate to="/dashboard" /> */}
        </Routes>
      ) : (
        <Routes>
          <ContentRoute exact path="/auth/login" component={Login} />
          <ContentRoute
            exact
            path="/auth/forgot-password"
            component={ForgotPasswordPage}
          />
          <ContentRoute
            exact
            path="/auth/profilestepper"
            component={ProfileStepper}
          />
          <Navigate from="/auth" exact={true} to="/auth/login" />
          <Navigate from="/auth/login" to="/dashboard" />;
          <Navigate to="/auth/login" />
        </Routes>
      )}
    </div>
  );
};
export const AuthPage = Routing;
