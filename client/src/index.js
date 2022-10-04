import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {About} from "components/about/About";
import App from "./App";
import {Blog} from "components/blog/Blog";
import {I100322} from "components/blog/items/I100322";
import {I092722} from "components/blog/items/I092722";
import {I092522} from "components/blog/items/I092522";
import {Template} from "components/blog/items/template";
import {Navigation} from "components/top/Navigation";
import {ScrollToTop} from "components/top/ScrollToTop";
import {Projects} from "components/demos/Projects";
import {TodosForMe} from "components/todosforme/TodosForMe";
import {WeatherApi} from "components/demos/WeatherApi";
import {NucatIframe} from "components/demos/NucatIframe";
import DashIframe from "components/demos/DashIframe";
import StepperIframe from "components/demos/StepperIframe";
import CodeChallenges from "components/codechallenges/CodeChallenges";
import CspReport from "components/helpers/CspReport";
import {Post00} from "components/posts/Post00";
import {Post01} from "components/posts/Post01";
import {Post02} from "components/posts/Post02";
import {Post03} from "components/posts/Post03";
import {Post04} from "components/posts/P04/Post04";
import {Post05} from "components/posts/Post05";
import {Post06} from "components/posts/Post06";
import {Post07} from "components/posts/Post07";
import {Post08} from "components/posts/Post08";
import {Post09} from "components/posts/Post09";
import {Post10} from "components/posts/Post10";
import {Post11} from "components/posts/Post11";
import {Post12} from "components/posts/Post12";
import {Post1001} from "components/posts/P10/Post1001";
import {Post1002} from "components/posts/P10/Post1002";
import {Post1003} from "components/posts/P10/Post1003";
import {Post1004} from "components/posts/P10/Post1004";
import {Post1005} from "components/posts/P10/Post1005";
import {Post1006} from "components/posts/P10/Post1006";
import {Post1007} from "components/posts/P10/Post1007";
import {Post1008} from "components/posts/P10/Post1008";
import ExpressExamples from "components/posts/content/expressExamples.js";
import ExpressFileRouting from "components/posts/content/expressFileRouting.js";
import ExpressMysql from "components/posts/content/expressMysql.js";
//import ExpressPostgres from "components/posts/content/expressPostgres.js";
import ExpressSqlite from "components/posts/content/expressSqlite.js";
import {AnimateListTools} from "components/top/ListTools";
import reportWebVitals from "./reportWebVitals";
import Container from "react-bootstrap/Container";
import {CookiesProvider} from "react-cookie";
import {SnackbarProvider} from "notistack";
import {Collapse} from "@material-ui/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

ReactDOM.render(

  <CookiesProvider>
    <SnackbarProvider
      dense
      maxSnack={3}
      TransitionComponent={Collapse}
      preventDuplicate
    >
      <div>
        <Router>
          <Navigation />
          <ScrollToTop className="ScrollToTop" />
          <div className="footer">&copy;2022&nbsp;marysonthego.tech&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/marysonthego/portfolio">This Site on Github</a></div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/i100322" element={<I100322 />} />
            <Route path="/i092722" element={<I092722 />} />
            <Route path="/i092522" element={<I092522 />} />
            <Route path="/template" element={<Template />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dashboard" element={<DashIframe />} />
            <Route path="/stepper" element={<StepperIframe />} />
            <Route path="/nucat" element={<NucatIframe />} />
            <Route path="/todos" element={<TodosForMe />} />
            <Route path="/weather" element={<WeatherApi />} />
            <Route path="/codechallenges" element={<CodeChallenges/>} />
            <Route path="/" element={<App />} />
            <Route path="/cspreport" element={<CspReport />} />
            <Route path="/post00" element={<Post00 />} />
            <Route path="/post01" element={<Post01 />} />
            <Route path="/post02" element={<Post02 />} />
            <Route path="/post03" element={<Post03 />} />
            <Route path="/post04" element={<Post04 />} />
            <Route path="/post05" element={<Post05 />} />
            <Route path="/post06" element={<Post06 />} />
            <Route path="/post07" element={<Post07 />} />
            <Route path="/post08" element={<Post08 />} />
            <Route path="/post09" element={<Post09 />} />
            <Route path="/post10" element={<Post10 />} />
            <Route path="/post11" element={<Post11 />} />
            <Route path="/post12" element={<Post12 />} />
            <Route path="/post1001" element={<Post1001 />} />
            <Route path="/post1002" element={<Post1002 />} />
            <Route path="/post1003" element={<Post1003 />} />
            <Route path="/post1004" element={<Post1004 />} />
            <Route path="/post1005" element={<Post1005 />} />
            <Route path="/post1006" element={<Post1006 />} />
            <Route path="/post1007" element={<Post1007 />} />
            <Route path="/post1008" element={<Post1008 />} />
            <Route path="/examples" element={<ExpressExamples />} />
            <Route path="/routing" element={<ExpressFileRouting />} />
            <Route path="expressmysql" element={<ExpressMysql />} />
            <Route path="listtools" element={<AnimateListTools />} />
            <Route path="expresssqlite" element={<ExpressSqlite />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      </div>
    </SnackbarProvider>
  </CookiesProvider>,
  document.getElementById("root")
);

reportWebVitals();
