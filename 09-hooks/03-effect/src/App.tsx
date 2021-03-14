import { VFC } from 'react';
import Timer from './Timer';
import './App.css';

const App: VFC = () => (
  <div className="container">
    <header>
      <h1>タイマー</h1>
    </header>
    <Timer limit={60} />
  </div>
);

export default App;
