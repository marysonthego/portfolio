import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { LayoutSplashScreen } from 'components/dashboard/components/layout/MetronicSplashScreen';
//import { ContentRoute } from 'components/dashboard/components/layout/ContentRoute';
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
    
    <>
      {/* { currentUser.isLoggedIn ? (
        <Routes>
          <Route  path="/dashboard" element={<DashboardPage/>} />
          <Route  path="/user-profile" element={<UserProfilePage/>}/>
          <Route  path="/logout" element={<Logout/>}/>
          <Route  path="/password" element={<ChangePassword/>}/>
          <Route  path="/locations-list" element={<LocationsStep/>}/>
          <Route  path="/friends-list" element={<FriendsStep/>}/>
          <Route  path="/list-customers" element={<ListCustomers/>}/>
          {currentUser.usertype === 'admin' ? (
            <>
            <Route  path="/list-customers" element={<ListCustomers/>}/>
            </>
          ) : (<Route render={() => <Navigate to="/dashboard"/> } />
          )}
          <Route path="/" render={() => <Navigate to="/dashboard"/> } />
        </Routes>
      ) : (
        <Routes>
          <Route path="/auth/login" element={<Login/>} />
          <Route render={() => <Navigate to="/auth/login"/> } />
          <Route render={() => <Navigate to="/error"/> } />
        </Routes>
      )} */}
    </>
  );
}
