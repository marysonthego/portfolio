import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { AuthInit } from "components/dashboard/components/AuthInit";
import { DashboardRoutes } from "components/dashboard/DashboardRoutes";
import { MaterialThemeProvider } from "components/dashboard/components/layout/MaterialThemeProvider";
import { MetronicLayoutProvider } from "components/dashboard/components/layout/MetronicLayout";
import { MetronicSubheaderProvider } from "components/dashboard/components/layout/MetronicSubheader";
import { CookiesProvider } from "react-cookie";
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
    console.log(`DashboardApp location.pathname:`, location.pathname);
  }, [location]);

  return (
    <DashboardRoutes />
  )
  // return (
  //   <CookiesProvider>
  //     <Provider store={store}>
  //       <MetronicLayoutProvider>
  //         <MetronicSubheaderProvider>
  //           <MaterialThemeProvider>
  //             <SnackbarProvider
  //               dense
  //               maxSnack={3}
  //               TransitionComponent={Collapse}
  //               preventDuplicate
  //             >
  //               <DashboardRoutes />
  //               {/* <Routes>
  //                 <Route
  //                   render={() => {
  //                     return (
  //                       <DebugRouter>
  //                         <DashboardRoutes />
  //                       </DebugRouter>
  //                     );
  //                   }}
  //                 />
  //               </Routes> */}
  //             </SnackbarProvider>
  //           </MaterialThemeProvider>
  //         </MetronicSubheaderProvider>
  //       </MetronicLayoutProvider>
  //     </Provider>
  //   </CookiesProvider>
  // );
}
