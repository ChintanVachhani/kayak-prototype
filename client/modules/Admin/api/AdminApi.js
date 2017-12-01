const api = 'http://localhost:8000/api'

const headers = {
  'Accept': 'application/json'
};

export const createFlight = (payload) =>
  fetch(`${api}/flight`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  }).then((response) => response.json())

  .then((responseJson) => {
    return responseJson;
  })
  .catch(error => {
    console.log("Create Flight Falied with error : " + error);
    return error;
  });
