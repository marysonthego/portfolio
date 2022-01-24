import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LayoutSplashScreen } from 'components/dashboard/components/layout/MetronicSplashScreen';
import { ContentRoute } from 'components/dashboard/components/layout/ContentRoute';
import { DashboardPage } from 'components/dashboard/pages/DashboardPage';
import { ChangePassword } from 'components/dashboard/pages/ChangePassword';
import { Login } from 'components/dashboard/pages/Login';
import { Logout } from 'components/dashboard/pages/Logout';
import { UserProfilePage } from 'components/dashboard/pages/UserProfilePage';
import { LocationsStep } from 'components/dashboard/pages/LocationsStep';
import { FriendsStep } from 'components/dashboard/pages/FriendsStep';
import { ListCustomers } from 'components/dashboard/pages/ListCustomers';
import { selectCurrentUser } from 'components/dashboard/redux/userSlice';

export default function BasePage (props) {
  let currentUser = useSelector(selectCurrentUser);
  console.log(`BasePage isLoggedIn: `, currentUser.isLoggedIn);

  return (
    <Suspense fallback={ <LayoutSplashScreen /> }>
      { currentUser.isLoggedIn ? (
        <Routes>
          <ContentRoute exact path="/dashboard" component={DashboardPage} />
          <ContentRoute exact path="/user-profile" component={UserProfilePage}/>
          <ContentRoute exact path="/logout" component={Logout}/>
          <ContentRoute exact path="/password" component={ChangePassword}/>
          <ContentRoute exact path="/locations-list" component={LocationsStep}/>
          <ContentRoute exact path="/friends-list" component={FriendsStep}/>
          <ContentRoute exact path="/list-customers" component={ListCustomers}/>
          {currentUser.usertype === 'admin' ? (
            <>
            <ContentRoute exact path="/list-customers" component={ListCustomers}/>
            </>
          ) : (<Route render={() => <Navigate to="/dashboard" /> } />
          )}
          <Route path="/" render={() => <Navigate to="/dashboard" /> } />
        </Routes>
      ) : (
        <Routes>
          <ContentRoute path="/auth/login" component={ Login } />
          <Route render={() => <Navigate to="/auth/login" /> } />
          <Route render={() => <Navigate to="/error" /> } />
        </Routes>
      )}
    </Suspense>
  );
}
