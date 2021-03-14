import { VFC, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router';

import Home from 'components/pages/Home';
import Characters from 'components/pages/Characters';
import './App.css';

const App: VFC = () => {
  const { hash, pathname } = useLocation();
  const { action } = useHistory();

  useEffect(() => {
    if (!hash || action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, hash, pathname]);

  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/characters" component={Characters} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
