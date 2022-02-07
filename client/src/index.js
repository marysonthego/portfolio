import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "components/styles/themes";
import { GlobalStyles } from "components/styles/globalStyles";
import App from "./App";
import store from "components/redux/store";
import { Provider } from "react-redux";
import { Navigation } from "components/top/Navigation";
import { ScrollToTop } from "components/top/ScrollToTop";
import { TodosForMe } from "components/todosforme/TodosForMe";
import { WeatherApi } from "components/demos/WeatherApi";
import NucatIframe from "components/demos/NucatIframe";
import { AlertsDashboard } from "components/demos/AlertsDashboard";
// import { Login } from "components/dashboard/pages/Login";
// import { Logout } from "components/dashboard/pages/Logout";
// import { ChangePassword } from "components/dashboard/pages/ChangePassword";
// import { ForgotPasswordPage } from "components/dashboard/pages/ForgotPasswordPage";
import { AlertsStepper } from "components/demos/AlertsStepper";
// import { ProfileStepper } from "components/dashboard/pages/ProfileStepper";
// import { LocationsStep } from "components/dashboard/pages/LocationsStep";
// import { FriendsStep } from "components/dashboard/pages/FriendsStep";
// import { ListCustomers } from "components/dashboard/pages/ListCustomers";
// import { UserProfilePage } from "components/dashboard/pages/UserProfilePage";
import reportWebVitals from "./reportWebVitals";
import Container from "react-bootstrap/Container";
import { MaterialThemeProvider } from "components/layout/MaterialThemeProvider";
import { MetronicLayoutProvider } from "components/layout/MetronicLayout";
import { MetronicSubheaderProvider } from "components/layout/MetronicSubheader";
import { CookiesProvider } from "react-cookie";
import { SnackbarProvider } from "notistack";
import { Collapse } from "@material-ui/core";
import "components/css/pages/login/login-1.scss";
import "socicon/css/socicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";


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
                      <Route path="/nucat" element={<NucatIframe/>}/>
                      <Route path="/aboutus" element={<NucatIframe/>}/>
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
