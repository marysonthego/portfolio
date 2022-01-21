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
import { Navigation } from "components/top/Navigation";
import { TodosForMe } from "components/todosforme/TodosForMe";
import  {Nucat}  from "components/demos/Nucat";
import {WeatherApi} from "components/demos/WeatherApi";
import {AlertsDashboard} from "components/demos/AlertsDashboard";
import {AlertsStepper} from "components/demos/AlertsStepper";
import reportWebVitals from "./reportWebVitals";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
require("dotenv").config();

// const ThemeToggler = () => {
//   const [theme, setTheme] = useState("dark");
//   theme === "light" ? setTheme("dark") : setTheme("light");
// };
ReactDOM.render(
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Container fluid className="background">
        <Navigation />
        <div className="footer">&copy;2022&nbsp;marysonthego.tech</div>
        <Router>
          <Routes>
            <Route path="/dashboard" element={<AlertsDashboard />} />
            <Route path="/stepper" element={<AlertsStepper/>} />
            <Route path="/nucat" element={<Nucat />} />
            <Route path="/todos" element={<TodosForMe />} />
            <Route path="/weather" element={<WeatherApi />} />
            <Route path="/" element={<App />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
