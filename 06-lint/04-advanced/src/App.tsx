/* eslint-disable react/jsx-key */
import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const logoAttrs = {
    className: 'App-logo',
    src: logo,
  };
  const title = 'こんにちは React';
  const targets = ['World', 'Kanae', 'Yukina'];

  return (
    <div className="App">
      <header className="App-header">
        {
          // コメントはこう書く
        }
        <img alt="ロゴ画像" {...logoAttrs} />
        {title && <h2>{title}</h2>}
        {targets.map(target => (
          <p>Hello, {target}</p>
        ))}
      </header>
    </div>
  );
};

export default App;
