import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ConfigInterface, SWRConfig } from 'swr';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const swrConfig: ConfigInterface = {
  suspense: true,
  shouldRetryOnError: false,
};

ReactDOM.render(
  <BrowserRouter>
    <SWRConfig value={swrConfig}>
      <App />
    </SWRConfig>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
