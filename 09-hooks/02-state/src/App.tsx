import { VFC } from 'react';
import Counter from './Counter';
import './App.css';

const App: VFC = () => (
  <div className="container">
    <header>
      <h1>カウンター</h1>
    </header>
    <Counter />
  </div>
);

export default App;
