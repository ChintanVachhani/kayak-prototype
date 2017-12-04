import fetch from 'isomorphic-fetch';
import Config from '../../server/config';

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';

export default function callApi(endpoint, method = 'get', body, header) {
  let reqBody;
  let token = localStorage.getItem("token");
  if (method === 'get') {
    reqBody = {
      headers: { 'content-type': 'application/json', "token": token },
      method,
    }
  } else if (header) {
    reqBody = {
      method,
      body: body,
    }
  } else {
    reqBody = {
      headers: { 'content-type': 'application/json', 'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, PATCH',"token": token },
      method,
      body: JSON.stringify(body),
    }
  }

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
