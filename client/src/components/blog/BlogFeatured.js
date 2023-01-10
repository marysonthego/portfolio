import * as items from "./items";

export const BlogFeatured = () => {
  let PageTitle = "Featured Posts";

  return (
    <div className="blogListContainer">
      <h1 className="blogList">{PageTitle}</h1>
      <ul className="blogFeaturedUl">
        <li>
          <a className="blogListItem" href="/b221205">
            <img
              className="blogListImg"
              src="media/ideasw200.png"
              alt="Ideas Series"
            />{" "}
            {items.B221205()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/b220927">
            <img className="blogListImg" src="media/routew200.png" alt="" />{" "}
            {items.B220927()}
          </a>
        </li>
        <li>
          <a className="blogListItem" href="/b221003">
            <img className="blogListImg" src="media/secretsw200.jpg" alt="" />{" "}
            {items.B221003()}
          </a>
        </li>
      </ul>
    </div>
  );
};
