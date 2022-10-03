import {I100322} from './items/I100322';
import {I092522} from './items/I092522';
import {I092722} from './items/I092722';
import {Template} from './items/template';

export const Blog = () => {
  let PageTitle = "Mary's Blog";

  return (
    <main className = 'container'>
      <h1 className = "blog">{PageTitle}</h1>
      <section className = 'blogList'>
        <ul>
        <li className = 'listItem'>
            <a className = 'item' href="/I100322">{I100322()}</a>
          </li>
          <li className = 'listItem'>
            <a className = 'item' href="/I092722">{I092722()}</a>
          </li>
          <li className = 'listItem'>
            <a className = 'item' href="/I092522">{I092522()}</a>
          </li>
          <li className = 'listItem'>
            <a className = 'item' href="/template">{Template()}</a>
          </li>
        </ul>
      </section>
    </main>
  );
};
