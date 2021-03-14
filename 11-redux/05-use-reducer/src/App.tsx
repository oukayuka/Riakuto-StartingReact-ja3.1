import { VFC } from 'react';

import CounterWidget from 'containers/templates/CounterWidget';

import './App.css';

const App: VFC = () => (
  <div className="container">
    <header>
      <h1>ビーズカウンター</h1>
    </header>
    <CounterWidget initialCount={0} />
  </div>
);

export default App;
