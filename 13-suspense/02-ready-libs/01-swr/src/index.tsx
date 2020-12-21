import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const swrConfig = {
  suspense: true,
  errorRetryCount: 3,
};

ReactDOM.render(
  <BrowserRouter>
    <SWRConfig value={swrConfig}>
      <App />
    </SWRConfig>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);

reportWebVitals();
