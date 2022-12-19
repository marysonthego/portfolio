import React, { useEffect, useState } from "react";
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import {setStorage} from "./components/helpers/LocalStorageHelpers";
import styled, {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./theme/GlobalStyles";
import * as themes from "./theme/schema.json";
import {useTheme} from "./theme/useTheme";
import {ThemeSelector} from "./ThemeSelector";

import {CookiesProvider} from "react-cookie";
import {SnackbarProvider} from "notistack";

import * as posts from "components/posts";
import * as items from "components/blog/items";
import * as p10 from "components/posts/P10";
import * as top from "components/top";
import {MainPage} from "components/top/MainPage";
import {About} from "components/about/About";
import {BlogList} from "components/blog/BlogList";
import {Projects} from "components/demos/Projects";
import {TodosForMe} from "components/todosforme/TodosForMe";
import {WeatherApi} from "components/demos/WeatherApi";
import {NucatIframe} from "components/demos/NucatIframe";
import DashIframe from "components/demos/DashIframe";
import StepperIframe from "components/demos/StepperIframe";
import CodeChallenges from "components/codechallenges/CodeChallenges";
import CspReport from "components/helpers/CspReport";
import ExpressExamples from "components/posts/content/expressExamples.js";
import ExpressFileRouting from "components/posts/content/expressFileRouting.js";
import ExpressMysql from "components/posts/content/expressMysql.js";
//import ExpressPostgres from "components/posts/content/expressPostgres.js";
import ExpressSqlite from "components/posts/content/expressSqlite.js";
import {AnimateListTools} from "components/top";
import {Collapse} from "@material-ui/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-datepicker/dist/react-datepicker.css";

const Container = styled.div`
  margin: auto;
`;

export default function App() {
  console.log(`NODE_ENV`, process.env.NODE_ENV);
  setStorage("all-themes", themes.default);
  const { theme, themeLoaded} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  let location = useLocation();

  useEffect(() => {
    console.log(`App location.pathname:`, location.pathname);
  }, [location]);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);


  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <CookiesProvider>
            <SnackbarProvider
              dense
              maxSnack={3}
              TransitionComponent={Collapse}
              preventDuplicate
            >
              <Container style={{ fontFamily: selectedTheme.font }}>
                  <top.Navigation />
                  <top.ScrollToTop className="ScrollToTop" />
                  <div className="footer">
                    &copy;2022&nbsp;marysonthego.tech

                    <a
                      href="https://www.linkedin.com/in/mary-clark-33511214"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="media/linkedin2.png" alt="LinkedIn" />
                    </a>
                    <a
                      href="https://github.com/marysonthego"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="media/github.png" alt="Github" />
                    </a>
                    <a
                      href="https://my.indeed.com/p/maryc-6wv0hp8"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="media/indeed.png" alt="Indeed" />
                    </a>
                    <a
                      className="footer"
                      href="https://github.com/marysonthego/portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      This Site on Github
                    </a>
                    <ThemeSelector setter={setSelectedTheme} />
                  </div>

                  <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/bloglist" element={<BlogList />} />
                    <Route
                      path="/arrowfunctions"
                      element={<posts.ArrowFunctions />}
                    />
                    <Route path="/bnpm" element={<items.Bnpm />} />
                    <Route path="/b221205" element={<items.B221205 />} />
                    <Route path="/b221201" element={<items.B221201 />} />
                    <Route path="/b221123" element={<items.B221123 />} />
                    <Route path="/b221121" element={<items.B221121 />} />
                    <Route path="/b221003" element={<items.B221003 />} />
                    <Route path="/b220927" element={<items.B220927 />} />
                    <Route path="/btemplate" element={<items.Btemplate />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/dashboard" element={<DashIframe />} />
                    <Route path="/stepper" element={<StepperIframe />} />
                    <Route path="/nucat" element={<NucatIframe />} />
                    <Route path="/todos" element={<TodosForMe />} />
                    <Route path="/weather" element={<WeatherApi />} />
                    <Route
                      path="/codechallenges"
                      element={<CodeChallenges />} />
                    <Route path="/*" element={<MainPage />} />
                    <Route path="/cspreport" element={<CspReport />} />
                    <Route path="/post00" element={<posts.Post00 />} />
                    <Route path="/post01" element={<posts.Post01 />} />
                    <Route path="/post02" element={<posts.Post02 />} />
                    <Route path="/post03" element={<posts.Post03 />} />
                    <Route path="/post04" element={<posts.Post04 />} />
                    <Route path="/post05" element={<posts.Post05 />} />
                    <Route path="/post06" element={<posts.Post06 />} />
                    <Route path="/post07" element={<posts.Post07 />} />
                    <Route path="/post08" element={<posts.Post08 />} />
                    <Route path="/post09" element={<posts.Post09 />} />
                    <Route path="/post10" element={<posts.Post10 />} />
                    <Route path="/post11" element={<posts.Post11 />} />
                    <Route path="/post12" element={<posts.Post12 />} />
                    <Route path="/post1001" element={<p10.Post1001 />} />
                    <Route path="/post1002" element={<p10.Post1002 />} />
                    <Route path="/post1003" element={<p10.Post1003 />} />
                    <Route path="/post1004" element={<p10.Post1004 />} />
                    <Route path="/post1005" element={<p10.Post1005 />} />
                    <Route path="/post1006" element={<p10.Post1006 />} />
                    <Route path="/post1007" element={<p10.Post1007 />} />
                    <Route path="/post1008" element={<p10.Post1008 />} />
                    <Route path="/examples" element={<ExpressExamples />} />
                    <Route path="/routing" element={<ExpressFileRouting />} />
                    <Route path="/expressmysql" element={<ExpressMysql />} />
                    <Route path="/listtools" element={<AnimateListTools />} />
                    <Route path="/expresssqlite" element={<ExpressSqlite />} />
                    <Route path="/*" element={<Navigate replace to="/" />} />
                  </Routes>
              </Container>
            </SnackbarProvider>
          </CookiesProvider>
        </ThemeProvider>
      )}
    </>
  );
}
