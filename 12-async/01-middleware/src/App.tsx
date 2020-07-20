import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from 'containers/pages/Home';
import Members from 'containers/pages/Members';

import './App.css';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:orgCode/members" component={Members} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
