import { useLocation } from "react-router-dom";

export const Post02 = () => {
  const location = useLocation();

  let TopPic = "media/post02top03.png";
  let Title =
    "How to use React ForwardRef";
    const Created = "November 15, 2021";

  if (location.pathname.toString() === "/bloglist") {
    return (
      <span>
        <span className="blogListItem">{Title}</span>
        <div className="blogListIemDate">{Created}</div>
      </span>
    );
  }


  let Section1 = (
    <div>
      <p className="blogPostText">
        The React documentation has a couple of forward ref <a href="https://reactjs.org/docs/forwarding-refs.html" className="link-primary">examples</a>. One use case is when a parent component receives a ref and needs to pass it down to a child. The other allows an intercepting higher-order component (HOC) to pass a ref through to its wrapped component (remember, refs are not props so they can't get passed like one). These days, though, HOC wrappers are usually replaced with hooks.
      </p>
      <h2 className="blogPostText">Stepper Use Case</h2>
      <p className="blogPostText">
        One of my example projects is a sign-up stepper. A new user walks through a few steps, providing different kinds of information at each one. The parent stepper function has forward and back arrows that are enabled or disabled based on whether the user has filled out  required fields on each page (some pages don't have any required fields). The parent stepper must change the arrows from enabled to disabled or vice-versa for every child page. It might be fun to see if we can get this working with forward refs!
      </p>
      <img className="blogPostTopImg" src={"media/post0204.png"} alt="Post " />
      <p className="blogPostText"><br/>
        First, let's import the React components we will need (createRef, forwardRef, and useState).
        </p>
        <img className="blogPostTopImg" src={"media/post0201.png"} alt="Post " />
        <p className="blogPostText"> <br/>
        There are 4 states to keep track of:<br/>
        enableBack, disableBack<br/>
        enableNext, disableNext<br/><br/>
        Let's create one forwardRef for each one. They are in the stepper file for convenience, but are not inside the stepper component itself. The forwardRefs implement the arrows with gray (disabled) or yellow (enabled) colors.
        </p>
        <img className="blogPostTopImg" src={"media/post0203.png"} alt="Post " />
      <p className="blogPostText"> <br/>
        We need createRefs in the stepper component to pass to the forwardRefs. There are four of these: refEB, refDB, refEN, refDN.<br/><br/>
        Back and Next hold the arrow elements stored in local state. Each holds the current next or back arrow we want to display. Whenever an arrow needs to change we'll update the props for this local state.
        </p>
        <p className="blogPostText">
        The last thing we need is a place to keep track of the current state the arrows should be set to. backEnabled and nextEnabled are booleans stored in Redux with RTK Query. (Where they're stored is not relevant to what we're doing, it's simply that a lot of things are already stored there.)
      </p>
      <img className="blogPostTopImg" src={"media/post0207.png"} alt="Post " />
      <p className="blogPostText"><br/>
        All the elements are now in place to try out the forwardRefs. <br/>
        We'll implement them at the bottom of the stepper function's return as IconButton elements.<br/><br/>
        When an arrow (button) is pressed we test to see if it should be enabled or disabled, then call the element in Back (or Next) local state, passing it the correspondingly named ref we created.<br/><br/>
        In the final step, the local state element (which was just updated with a new ref) triggers a call to a forwardRef element with the new ref passed in. The Arrow_IosIcon in the forwardRef is implemented with the new ref to redraw the arrow.
      </p>
      <img className="blogPostTopImg" src={"media/post0208.png"} alt="Post " />
      <p className="blogPostText"><br/>
        The Back and Next local states start out initialized to enabledBack/enabledNext, and change via regular setState calls throughout the stepper as child pages issue callbacks with their status.
        <br/><br/> This means that when the arrows are evaluated in the stepper return, all their props are already correctly set. What triggers a forwardRef is a change to the ref passed to the local state.
        </p>

    </div>
  );
  return (
    <div className="blogPostContainer">
      <div className="blogPostTopImg">
        <img src={TopPic} alt="Post " />
      </div>
        <h1 className="blogPostTitle">{Title}</h1>
        <div className="blogPostPage">
        {Section1}
        </div>
      </div>
  );
};
