import React from 'react';
import ReactDOM from 'react-dom';
import {
  ReactQueryConfigProvider,
  ReactQueryProviderConfig,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const queryConfig: ReactQueryProviderConfig = {
  shared: {
    suspense: true,
  },
  queries: {
    staleTime: 60 * 1000,
    retry: 0,
  },
};
const root = document.getElementById('root') as HTMLElement;

ReactDOM.unstable_createRoot(root).render(
  <ReactQueryConfigProvider config={queryConfig}>
    <App />
    {process.env.NODE_ENV === 'development' && (
      <ReactQueryDevtools initialIsOpen={false} />
    )}
  </ReactQueryConfigProvider>,
);

serviceWorker.unregister();
