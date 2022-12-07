import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from "lodash";
import { useTheme } from "./theme/useTheme";
import { getStorage } from "./components/helpers/LocalStorageHelpers";

const ThemedButton = styled.button`
  border: 0;
  display: inline-block;
  padding: 0px;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 10px;
  width: 100%;
  height: 20px;
  cursor: pointer;
`;

const Wrapper = styled.li`
  padding: 2px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #000;
  list-style: none;
`;

const Container = styled.ul`
  display: flex;
  width: 100%;
`;

const Header = styled.h2`
  display: flex;
  justify-content: space-around;
`;

export const ThemeSelector = (props) => {
  const themesFromStore = getStorage("all-themes");
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();

  const ThemeSwitcher = (selectedTheme) => {
    console.log(selectedTheme);
    setMode(selectedTheme);
    props.setter(selectedTheme);
  };

  const updateThemeCard = (theme) => {
    const key = _.keys(theme)[0];
    const updated = { ...data, [key]: theme[key] };
    setData(updated);
  };

  useEffect(() => {
    setThemes(_.keys(data));
  }, [data]);

  useEffect(() => {
    props.newTheme && updateThemeCard(props.newTheme);
  }, [props.newTheme]);

  const ThemeCard = (props) => {
    return (
      <ThemedButton
        onClick={(selectedTheme) => ThemeSwitcher(props.theme, selectedTheme)}
        style={{
          backgroundColor: `${
            data[_.camelCase(props.theme.name)].colors.button.background
          }`,
          color: `#ffffff`,
          fontFamily: `${data[_.camelCase(props.theme.name)].font}`,
        }}
      >
        {props.theme.name}
      </ThemedButton>
    );
  };

  return (
    <div>
      <Container>
        {themes.length > 0 &&
          themes.map((theme) => (
            <ThemeCard theme={data[theme]} key={data[theme].id} />
          ))}
      </Container>
    </div>
  );
};
