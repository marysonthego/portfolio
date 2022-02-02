import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'components/dashboard/redux/userSlice';

export default function BasePage (props) {
  let currentUser = useSelector(selectCurrentUser);
  console.log(`BasePage isLoggedIn: `, currentUser.isLoggedIn);

  return (
    <>
    </>
  );
}
