import {I092522} from './items/I092522';

export const Blog = () => {
  let PageTitle = "Blog";

  return (
    <main className = 'container'>
      <h1 className = 'blog'>{PageTitle}</h1>
      <section className = 'blogList'>
        <ul className = 'listItem'>
          <li>
            <a className = 'item' href="/I092522">{I092522()}</a>
          </li>
          <li>
            <a className = 'item' href="/post01">React Bits & Javascript Pieces</a>
          </li>
          <li>
            <a className = 'item' href="/post02">React Hooks</a>
          </li>
        </ul>
      </section>
    </main>
  );
};
