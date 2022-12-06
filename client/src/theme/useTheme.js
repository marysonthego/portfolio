import { useEffect, useState } from 'react';
import { getStorage, setStorage } from '../components/helpers/LocalStorageHelpers';
import _ from 'lodash';

export const useTheme = () => {
  const themes = getStorage('all-themes');
  const [theme, setTheme] = useState(themes.data.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    setStorage('theme', mode)
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'));
    return allFonts;
  }

  useEffect(() =>{
    const localTheme = getStorage('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};
