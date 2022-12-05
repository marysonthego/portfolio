import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useTheme } from "./theme/useTheme";
import {ThemeSelector} from './ThemeSelector';
import './App.scss';
import { MainPage } from "components/top/MainPage";
import { setStorage } from './components/helpers/LocalStorageHelpers';
import * as themes from './theme/schema.json';
import * as top from "components/top";

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

export default function App() {
  console.log(`NODE_ENV`, process.env.NODE_ENV);
  setStorage('all-themes', themes.default);
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  let location = useLocation();

  useEffect(() => {
    console.log(`App location.pathname:`, location.pathname);
  }, [location]);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [ theme]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
    <>

      {themeLoaded &&
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />

          <Container style={{ fontFamily: selectedTheme.font}}>
          {/* <top.Navigation />
            <top.ScrollToTop className="ScrollToTop" />
            <div className="footer">&copy;2022&nbsp;marysonthego.tech
            <a
                href="https://twitter.com/marysonthego?ref_src=twsrc%5Etfw"
                className="twitter-follow-button"
                data-show-count="false"
                target="_blank" rel="noreferrer"
              >
                Follow @marysonthego
              </a>
              <a
                href="https://www.linkedin.com/in/mary-clark-33511214"
                target="_blank" rel="noreferrer">
                <img src="media/linkedin2.png" alt="LinkedIn"/>
              </a>
              <a
                href="https://github.com/marysonthego"
                target="_blank" rel="noreferrer">
                <img src="media/github.png" alt="Github"/>
              </a>
              <a
                href="https://my.indeed.com/p/maryc-6wv0hp8"
                target="_blank" rel="noreferrer">
                <img src="media/indeed.png" alt="Indeed"/>
              </a>
              <a href="https://github.com/marysonthego/portfolio"
              target="_blank" rel="noreferrer">This Site on Github</a>
            </div> */}


            <MainPage />
            <ThemeSelector setter={ setSelectedTheme } />
           </Container>
        </ThemeProvider>
      }
    </>
  );
}
