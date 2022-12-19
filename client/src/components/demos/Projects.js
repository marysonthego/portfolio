import {TodosForMe} from "components/todosforme/TodosForMe";
import {WeatherApi} from "components/demos/WeatherApi";
import {NucatIframe} from "components/demos/NucatIframe";
import DashIframe from "components/demos/DashIframe";
import StepperIframe from "components/demos/StepperIframe";
import {Post10} from "components/posts/Post10";
import {Post11} from "components/posts/Post11";

export const Projects = () => {
  let PageTitle = "Projects";

  return (
    <main className = 'blogListContainer'>
      <h1 className = "blogList">{PageTitle}</h1>
        <ul className="blogListUl">
          <li>
            <a className = 'projectListItem' href="/nucat">{NucatIframe()}</a>
          </li>
          <li >
            <a className = 'projectListItem' href="/weather">{WeatherApi()}</a>
          </li>
          <li >
            <a className = 'projectListItem' href="/dashboard">{DashIframe()}</a>
          </li>
          <li>
            <a className = 'projectListItem' href="/stepper">{StepperIframe()}</a>
          </li>
          <li >
            <a className = 'projectListItem' href="/todos">{TodosForMe()}</a>
          </li>
          <li >
            <a className = 'projectListItem' href="/post11">{Post11()}</a>
          </li>
          <li >
            <a className = 'projectListItem' href="/post10">{Post10()}</a>
          </li>
        </ul>
    </main>
  );
};
