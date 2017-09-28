import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { collectInitial } from 'node-style-loader/collect'

import reducers from '../reducers';
import * as api from '../apis';
import saga from '../sagas';

import '../index.css';
import App from '../components/App/App';


const LOCAL_URL_JS = 'http://localhost:3000/static/js/bundle.js'
const AWS_URL_JS = 'https://s3.eu-central-1.amazonaws.com/lambda-react-demo-fronttalks/static/js/main.js';
const bundleUrl = process.env.NODE_ENV === 'AWS' ? AWS_URL_JS : LOCAL_URL_JS;
const host = process.env.NODE_ENV === 'AWS' ? 'https://s3.eu-central-1.amazonaws.com/lambda-react-demo-fronttalks' : 'http://localhost:3000' ;


const generateHTML = (markup, styleTag, state) => (
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="shortcut icon" href="${host}/favicon.ico">
    ${styleTag}
    <title>FrontTlaks Videos</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root">${markup}</div>
    <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
      </script>
    <script type="text/javascript" src="${bundleUrl}"></script>
  </body>
</html>`
);

const render = () => {
  const styleTag = collectInitial();

  return api.search('cat').then((results) => {
    const initialState = {
      isFetching: false,
      isError: false,
      results: [ ...results.items]
    };

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));

    const markup = renderToString(
        <Provider store={store}>
          <App />
        </Provider>);

    return generateHTML(markup, styleTag, initialState);
  });
}

export default render;
