import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  ReactQueryConfigProvider,
  ReactQueryProviderConfig,
} from 'react-query';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const queryConfig: ReactQueryProviderConfig = {
  suspense: true,
};

ReactDOM.render(
  <BrowserRouter>
    <ReactQueryConfigProvider config={queryConfig}>
      <App />
    </ReactQueryConfigProvider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
