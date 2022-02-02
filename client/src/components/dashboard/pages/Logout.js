import React from 'react';
import {Navigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetUserState } from 'components/dashboard/redux/userSlice';
import { resetLocations } from 'components/dashboard/redux/locationsSlice';
import { resetFriends } from 'components/dashboard/redux/friendsSlice';
import { logout } from 'components/dashboard/components/AuthCrud';

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
