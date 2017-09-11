import render from './renderer';

const createResponse = (html) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    },
    body: html
  };
};

// eslint-disable-next-line import/prefer-default-export
export const renderPage = (event, context, cb) => {
  render()
    .then((html) => cb(null, createResponse(html)))
    .catch(e => cb(e));
};