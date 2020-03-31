import React, { FC } from 'react';

import Members from 'containers/pages/Members';
import Devtools from './Devtools';
import './App.css';

const App: FC = () => (
  <>
    <Members enablePrefetch />
    <Devtools />
  </>
);

export default App;
