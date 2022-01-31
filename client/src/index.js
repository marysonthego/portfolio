import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/nunito";
import "@fontsource/nunito/800.css";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "components/top/themes";
import { GlobalStyles } from "components/top/globalStyles";
import "./index.css";
import App from "./App";
import store from "components/dashboard/redux/store";
import { Provider } from "react-redux";
import { Navigation } from "components/top/Navigation";
import { ScrollToTop } from "components/top/ScrollToTop";
import { TodosForMe } from "components/todosforme/TodosForMe";
import { Nucat } from "components/demos/Nucat";
import { AboutUs } from "components/demos/AboutUs";
import { WeatherApi } from "components/demos/WeatherApi";
import { AlertsDashboard } from "components/demos/AlertsDashboard";
import { Login } from "components/dashboard/pages/Login";
import { Logout } from "components/dashboard/pages/Logout";
import { ChangePassword } from "components/dashboard/pages/ChangePassword";
import { ForgotPasswordPage } from "components/dashboard/pages/ForgotPasswordPage";
import { AlertsStepper } from "components/demos/AlertsStepper";
import { ProfileStepper } from "components/dashboard/pages/ProfileStepper";
import { LocationsStep } from "components/dashboard/pages/LocationsStep";
import { FriendsStep } from "components/dashboard/pages/FriendsStep";
import { ListCustomers } from "components/dashboard/pages/ListCustomers";
import { UserProfilePage } from "components/dashboard/pages/UserProfilePage";
import reportWebVitals from "./reportWebVitals";
import Container from "react-bootstrap/Container";
import { MaterialThemeProvider } from "components/dashboard/components/layout/MaterialThemeProvider";
import { MetronicLayoutProvider } from "components/dashboard/components/layout/MetronicLayout";
import { MetronicSubheaderProvider } from "components/dashboard/components/layout/MetronicSubheader";
import { CookiesProvider } from "react-cookie";
import { SnackbarProvider } from "notistack";
import { Collapse } from "@material-ui/core";
import "components/dashboard/css/pages/login/login-1.scss";
import "./index.scss"; // Standard version
import "socicon/css/socicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-datepicker/dist/react-datepicker.css";
//import "bootstrap/dist/css/bootstrap.css";
//import "%PUBLIC_URL%/css/bootstrap.min.css";

// const ThemeToggler = () => {
//   const [theme, setTheme] = useState("dark");
//   theme === "light" ? setTheme("dark") : setTheme("light");
// };
ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <CookiesProvider>
      <Provider store={store}>
        <MetronicLayoutProvider>
          <MetronicSubheaderProvider>
            <MaterialThemeProvider>
              <SnackbarProvider
                dense
                maxSnack={3}
                TransitionComponent={Collapse}
                preventDuplicate
              >
                <GlobalStyles />
                <Container fluid className="background">
                  <Router>
                    <Navigation />
                    <ScrollToTop className="ScrollToTop" />
                    <div className="footer">
                      &copy;2022&nbsp;marysonthego.tech
                    </div>
                    <Routes>
                      <Route path="/dashboard" element={<AlertsDashboard />} />
                      <Route
                        path="/user-profile"
                        element={<UserProfilePage />}
                      />
                      <Route path="/login" element={<Login />} />
                      <Route path="/logout" element={<Logout />} />
                      <Route path="/password" element={<ChangePassword />} />
                      <Route
                        path="/locations-list"
                        element={<LocationsStep />}
                      />
                      <Route path="/friends-list" element={<FriendsStep />} />
                      <Route
                        path="/list-customers"
                        element={<ListCustomers />}
                      />
                      <Route
                        path="/forgot-password"
                        element={<ForgotPasswordPage />}
                      />
                      <Route path="/stepper" element={<AlertsStepper />} />
                      <Route
                        path="/profilestepper"
                        element={<ProfileStepper />}
                      />
                      <Route path="/nucat" element={<Nucat />} />
                      <Route path="/aboutus" element={<AboutUs />} />
                      <Route path="/todos" element={<TodosForMe />} />
                      <Route path="/weather" element={<WeatherApi />} />
                      <Route path="/" element={<App />} />
                    </Routes>
                  </Router>
                </Container>
              </SnackbarProvider>
            </MaterialThemeProvider>
          </MetronicSubheaderProvider>
        </MetronicLayoutProvider>
      </Provider>
    </CookiesProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
