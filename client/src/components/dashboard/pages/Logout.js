import React from 'react';
import { 
  Navigate,
  Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetUserState } from 'components/dashboard/redux/userSlice';
import { resetLocations } from 'components/dashboard/redux/locationsSlice';
import { resetFriends } from 'components/dashboard/redux/friendsSlice';
import { ContentRoute } from 'components/dashboard/components/layout/ContentRoute';
import { logout } from 'components/dashboard/components/AuthCrud';
import { Login } from 'components/dashboard/pages/Login';

export function Logout() {
  const dispatch = useDispatch();

  async function doLogout() {
    await logout();
    
  }
  dispatch(resetUserState(null));
  dispatch(resetLocations(null));
  dispatch(resetFriends(null));

  doLogout();

  return (
    <Navigate to="/login"/>
  );
}
