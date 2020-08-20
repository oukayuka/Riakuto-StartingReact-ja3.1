import React, { FC } from 'react';
import Members from 'containers/pages/Members';
import './App.css';

const App: FC = () => (
  <>
    <Members enablePrefetch={false} />
  </>
);

export default App;
