import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "components/dashboard/redux/userSlice";
import { Layout } from "components/dashboard/components/layout/Layout";
import BasePage from "components/dashboard/BasePage";
import { Logout } from "components/dashboard/pages/Logout";
import { AuthPage } from "components/dashboard/pages/AuthPage";
import { ErrorPage } from "components/dashboard/pages/ErrorPage1";

export function DashboardRoutes() {
  let currentUser = useSelector(selectCurrentUser);
  console.log(`DashboardRoutes currentUser:`, currentUser);

  return (
    <>
      {currentUser.isLoggedIn === null || !currentUser.isLoggedIn ? (
        /*Render auth page when user not authorized.*/
        <AuthPage />
      ) : (
          <Navigate to="/dashboard" />
      )}
      
      {currentUser.isLoggedIn === null || !currentUser.isLoggedIn ? (
        /*Navigate to `/login` when user is not authorized*/
        <Navigate to="/login" />
      ) : (
        <Layout>
          <BasePage />
        </Layout>
      )}
    </>
  );
}
