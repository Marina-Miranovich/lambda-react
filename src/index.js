import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import saga from './sagas';

import './index.css';
import App from './components/App/App';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
