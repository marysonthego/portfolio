import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { AuthInit } from "components/dashboard/components/AuthInit";
import { DashboardRoutes } from "components/dashboard/DashboardRoutes";
import { I18nProvider } from "components/dashboard/helpers/i18n";
import { MaterialThemeProvider } from "components/dashboard/components/layout/MaterialThemeProvider";
import { SnackbarProvider } from "notistack";
import { Collapse } from "@material-ui/core";

const DebugRouter = ({ children }) => {
  let { location } = useNavigate();
  if (process.env.NODE_ENV === "development") {
    console.log(
      `DEBUG ROUTER: location.pathname:`,
      location.pathname,
      `location.search:`,
      location.search,
      `location.state:`,
      JSON.stringify(location.state),
      `children:`,
      children
    );
  }
  return children;
};

export function DashboardApp({ basename }) {
  let location = useLocation();

  useEffect(() => {
    console.log(`location.pathname:`, location.pathname);
  }, [location]);

  return (
    <MaterialThemeProvider>
      <SnackbarProvider
        dense
        maxSnack={3}
        TransitionComponent={Collapse}
        preventDuplicate
      >
        <AuthInit>
          <Routes>
            <Route
              render={() => {
                return (
                  <DebugRouter>
                    <DashboardRoutes />
                  </DebugRouter>
                );
              }}
            />
          </Routes>
        </AuthInit>
      </SnackbarProvider>
    </MaterialThemeProvider>
  );
}

