import { createContext } from 'react';

export const themeKeys = ['light', 'dark'] as const;
const themeProperties = ['foreground', 'background'] as const;

export const themeStyles: {
  [key in typeof themeKeys[number]]: {
    [property in typeof themeProperties[number]]: string;
  };
} = {
  light: {
    foreground: '#000',
    background: '#eee',
  },
  dark: {
    foreground: '#fff',
    background: '#222',
  },
};

type IThemeContext = {
  key: typeof themeKeys[number];
  styles: { [key in typeof themeProperties[number]]: string };
  toggle: () => void;
};

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
