import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryConfig, ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const queryConfig: ReactQueryConfig = {
  shared: {
    suspense: true,
  },
  queries: {
    retry: 0,
    // useErrorBoundary: true,
  },
};

ReactDOM.render(
  <BrowserRouter>
    <ReactQueryConfigProvider config={queryConfig}>
      <App />
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </ReactQueryConfigProvider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
