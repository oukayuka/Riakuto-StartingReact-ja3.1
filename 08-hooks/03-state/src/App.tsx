import React, { FC } from 'react';
import Counter from './Counter';
import './App.css';

const App: FC = () => (
  <div className="container">
    <header>
      <h1>最大値カウンター</h1>
    </header>
    <Counter max={100} />
  </div>
);

export default App;
