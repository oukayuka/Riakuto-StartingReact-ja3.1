import React, { FC } from 'react';

import Members from 'containers/pages/Members';
import Devtools from './Devtools';
import './App.css';

const App: FC = () => (
  <>
    <Members enablePrefetch={false} />
    <Devtools />
  </>
);

export default App;
