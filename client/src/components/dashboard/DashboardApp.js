import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DashboardRoutes } from "components/dashboard/DashboardRoutes";

// const DebugRouter = ({ children }) => {
//   let { location } = useNavigate();
//   if (process.env.NODE_ENV === "development") {
//     console.log(
//       `DEBUG ROUTER: location.pathname:`,
//       location.pathname,
//       `location.search:`,
//       location.search,
//       `location.state:`,
//       JSON.stringify(location.state),
//       `children:`,
//       children
//     );
//   }
//   return children;
// };

export function DashboardApp({ basename }) {
  let location = useLocation();

  useEffect(() => {
    console.log(`DashboardApp location.pathname:`, location.pathname);
  }, [location]);

  return (
    <DashboardRoutes />
  )
}
