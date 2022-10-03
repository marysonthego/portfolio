import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {MainPage} from "components/top/MainPage";

export default function App() {
  console.log(`NODE_ENV`, process.env.NODE_ENV);
  console.log(`API_URL`, process.env.REACT_APP_API_URL);
  console.log(`API_KEY`, process.env.REACT_APP_API_KEY);

  let location = useLocation();

  useEffect(() => {
    console.log(`App location.pathname:`, location.pathname);
  }, [location]);

  return (
      <div className="App">
        <MainPage />
      </div>
  );
}
