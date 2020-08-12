import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import { userSlice } from './features/user';
import userSaga from './sagas/user-saga';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: userSlice.reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare],
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

sagaMiddleWare.run(userSaga);
serviceWorker.unregister();
