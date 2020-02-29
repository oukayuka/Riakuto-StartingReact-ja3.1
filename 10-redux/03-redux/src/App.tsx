import React, { FC } from 'react';

import ColorfulBeads from 'containers/molecules/ColorfulBeads';
import Counter from 'containers/organisms/CounterBoard';

import './App.css';

const App: FC = () => (
  <div className="container">
    <header>
      <h1>ビーズカウンター</h1>
    </header>
    <Counter />
    <ColorfulBeads />
  </div>
);

export default App;
