import fetch from 'isomorphic-fetch';
import Config from '../../server/config';

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';

export default function callApi(endpoint, method = 'get', body, header) {
  let reqBody;

  if (method === 'get') {
    reqBody = {
      headers: {'content-type': 'application/json', 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5Aa2F5YWstcHJvdG90eXBlLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJGpqTW90S3laMjFlUWxyQ1lid1c2WU9oOEJ2YmZVeFkwQmFwUDRkeDV2U0VJYU1scUVacnJTIiwiaXNBZG1pbiI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAxNy0xMi0wNFQxNzozMDo1Ny4wMDBaIiwidXBkYXRlZEF0IjoiMjAxNy0xMi0wNFQxNzozMDo1Ny4wMDBaIn0sImlhdCI6MTUxMjQyNjQ5MCwiZXhwIjoxNTEyNDMzNjkwfQ.2OSAbGnhXc6caKTgTnkxwUgGBv5osiN12me-zcZUNqU'},
      method,
    }
  } else if (header) {
    reqBody = {
      method,
      body: body,
    }
  } else {
    reqBody = {
      headers: {'content-type': 'application/json', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH', 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5Aa2F5YWstcHJvdG90eXBlLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJGpqTW90S3laMjFlUWxyQ1lid1c2WU9oOEJ2YmZVeFkwQmFwUDRkeDV2U0VJYU1scUVacnJTIiwiaXNBZG1pbiI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAxNy0xMi0wNFQxNzozMDo1Ny4wMDBaIiwidXBkYXRlZEF0IjoiMjAxNy0xMi0wNFQxNzozMDo1Ny4wMDBaIn0sImlhdCI6MTUxMjQyNjQ5MCwiZXhwIjoxNTEyNDMzNjkwfQ.2OSAbGnhXc6caKTgTnkxwUgGBv5osiN12me-zcZUNqU'},
      method,
      body: JSON.stringify(body),
    }
  }

  return fetch(`${API_URL}/${endpoint}`, reqBody)
    .then(response => response.json().then(json => ({json, response})))
    .then(({json, response}) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return json;
    })
    .then(
      response => response,
      error => error,
    );
}
