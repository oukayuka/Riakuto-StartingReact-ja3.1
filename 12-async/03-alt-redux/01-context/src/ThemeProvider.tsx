import { FC, useCallback, useState } from 'react';
import { ThemeContext, themeKeys, themeStyles } from './context';

const ThemeProvider: FC = ({ children }) => {
  const [key, setKey] = useState<typeof themeKeys[number]>('light');
  const styles = themeStyles[key];

  const toggle = useCallback(() => {
    const newKey = themeKeys.find((themeKey) => themeKey !== key);
    if (newKey) setKey(newKey);
  }, [key]);

  return (
    <ThemeContext.Provider value={{ key, styles, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
