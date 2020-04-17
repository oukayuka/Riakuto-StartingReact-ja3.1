import React from 'react';
import ReactDOM from 'react-dom';
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
  retry: 0,
  staleTime: 60000,
  suspense: true,
  useErrorBoundary: true,
};

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <ReactQueryConfigProvider config={queryConfig}>
    <App />
    {process.env.NODE_ENV === 'development' && <Devtools />}
  </ReactQueryConfigProvider>,
);

serviceWorker.unregister();
