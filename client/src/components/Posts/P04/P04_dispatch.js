import react from "react";

export const P04_dispatch = () => {
  let code1 = `List = locs.map(loc => 
    dispatch(addLocation({loc})) 
    (<LocationsRow key={loc.id} dataLoc = {loc}/>));`;

  let code2 = `List = locs.map(loc => { 
    dispatch(addLocation({loc})) 
    return (<LocationsRow key={loc.id} dataLoc = {loc}/>) 
});`;

  let Post = (
    <div className="sec" id="dispatch">
      <h4 className="subtitle">
        Uncaught TypeError: Object(...)(...) is not a function
      </h4>
      <hr/>
      <p className="post-text">
        Uncaught TypeError: dispatch(...) is not a function
        <br />
        If you look closely, you might notice how similar to{" "}
        <a className="link-primary" href="#arrowFunctions">
          Arrow Functions with array.map
        </a>{" "}
        this problem is.
      </p>
        {code1}
      <p className="post-text">
        The fix is exactly the same, too. Replace the parentheses surrounding
        the function with braces and add a return statement.
      </p>
        {code2}
    </div>
  );
  return <>{Post}</>;
};
