import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import DashIframe from "components/demos/DashIframe";
import StepperIframe from "components/demos/StepperIframe";
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
                      <Route path="/dashboard" element={<DashIframe />}/>
                      <Route path="/stepper" element={<StepperIframe/>}/>
                      <Route path="/nucat" element={<NucatIframe/>}/>
                      <Route path="/todos" element={<TodosForMe />}/>
                      <Route path="/weather" element={<WeatherApi/>}/>
                      <Route path="/" element={<App/>}/>
                      <Route path="*" element={<Navigate replace to="/" />}/>
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
