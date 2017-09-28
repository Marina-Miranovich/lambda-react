import esPromise from 'es6-promise';
import 'isomorphic-fetch';
esPromise.polyfill();

export const search = (q) => {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&maxResults=9&key=AIzaSyCvIQlSdzdlpOzowcdpP3hE4cYzKFYNnxg`, {
    method: 'GET'
  }).then((response) => response.json());
};