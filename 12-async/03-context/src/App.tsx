import React, { FC, useContext } from 'react';

import { ThemeContext } from './context';
import ThemeProvider from './ThemeProvider';
import './App.css';

const ThemedButton: FC = () => {
  const { key, styles, toggle } = useContext(ThemeContext);

  return (
    <button
      type="button"
      style={{ background: styles.background, color: styles.foreground }}
      onClick={toggle}
      className="themed-button"
    >
      current theme is {key}
    </button>
  );
};

const App: FC = () => (
  <div className="container">
    <ThemeProvider>
      <div>
        <h2>New Context API</h2>
        <p>React Context API is super awesome!</p>
      </div>
      <hr />
      <ThemedButton />
    </ThemeProvider>
  </div>
);

export default App;
