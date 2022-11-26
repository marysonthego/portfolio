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
    <main className = 'container'>
      <h1 className = "blog">{PageTitle}</h1>
      <section className = 'blogList'>
        <ul>
        <li className = 'listItem'>
            <a className = 'item' href="/nucat">{NucatIframe()}</a>
          </li>
          <li className = 'listItem'>
            <a className = 'item' href="/weather">{WeatherApi()}</a>
          </li>
          <li className = 'listItem'>
            <a className = 'item' href="/dashboard">{DashIframe()}</a>
          </li>
          <li className = 'listItem'>
            <a className = 'item' href="/stepper">{StepperIframe()}</a>
          </li>
          <li className = 'listItem'>
            <a className = 'item' href="/todos">{TodosForMe()}</a>
          </li>
          <li className = 'listItem'>
            <a className = 'item' href="/post11">{Post11()}</a>
          </li>
          <li className = 'listItem'>
            <a className = 'item' href="/post10">{Post10()}</a>
          </li>
        </ul>
      </section>
    </main>
  );
};
