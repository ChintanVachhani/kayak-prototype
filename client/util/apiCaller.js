import fetch from 'isomorphic-fetch';
import Config from '../../server/config';

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';

export default function callApi(endpoint, method = 'get', body) {
  let reqBody;
  if(method === 'get') {
    reqBody = {
        headers: { 'content-type': 'application/json' },
        method,
      }
  }
  else {
    reqBody = {
    headers: { 'content-type': 'application/json' },
    method,
    body: JSON.stringify(body),
  }  
  }
  console.log("reqqqqqq : ", reqBody)
  return fetch(`${API_URL}/${endpoint}`, reqBody)
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  })
  .then(
    response => response,
    error => error
  );
}
