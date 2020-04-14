import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  ReactQueryConfigProvider,
  ReactQueryProviderConfig,
} from 'react-query';

import App from './App';
import Devtools from './Devtools';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const queryConfig: ReactQueryProviderConfig = {
  suspense: true,
  retry: 0,
};

ReactDOM.render(
  <BrowserRouter>
    <ReactQueryConfigProvider config={queryConfig}>
      <App />
      {process.env.NODE_ENV === 'development' && <Devtools />}
    </ReactQueryConfigProvider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
