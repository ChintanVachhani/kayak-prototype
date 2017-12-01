// Please put 'kafka' directory containing 'client.js', 'Connection.js' & 'kafkarpc.js', in the routes folder
let kafka = require('../routes/kafka/client');

export function createHotel(req, res) {
  kafka.make_request('hotelTopic', {
    name: 'createHotel',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        res.status(200).json(response);
        break;
      case 201:
        res.status(201).json(response);
        break;
      case 400:
        res.status(400).json(response);
        break;
      case 401:
        res.status(401).json(response);
        break;
      case 404:
        res.status(404).json(response);
        break;
      case 500:
        res.status(500).json(response);
        break;
    }
  });
}

export function getHotel(req, res) {
  kafka.make_request('hotelTopic', {
    name: 'getHotel',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        res.status(200).json(response);
        break;
      case 201:
        res.status(201).json(response);
        break;
      case 400:
        res.status(400).json(response);
        break;
      case 401:
        res.status(401).json(response);
        break;
      case 404:
        res.status(404).json(response);
        break;
      case 500:
        res.status(500).json(response);
        break;
    }
  });
}

export function updateHotel(req, res) {
  kafka.make_request('hotelTopic', {
    name: 'updateHotel',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        res.status(200).json(response);
        break;
      case 201:
        res.status(201).json(response);
        break;
      case 400:
        res.status(400).json(response);
        break;
      case 401:
        res.status(401).json(response);
        break;
      case 404:
        res.status(404).json(response);
        break;
      case 500:
        res.status(500).json(response);
        break;
    }
  });
}

export function deleteHotel(req, res) {
  kafka.make_request('hotelTopic', {
    name: 'deleteHotel',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        res.status(200).json(response);
        break;
      case 201:
        res.status(201).json(response);
        break;
      case 400:
        res.status(400).json(response);
        break;
      case 401:
        res.status(401).json(response);
        break;
      case 404:
        res.status(404).json(response);
        break;
      case 500:
        res.status(500).json(response);
        break;
    }
  });
}
