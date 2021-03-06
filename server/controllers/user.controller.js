// Please put 'kafka' directory containing 'client.js', 'Connection.js' & 'kafkarpc.js', in the routes folder
let kafka = require('../routes/kafka/client');
import cacheClient from '../redis';

export function signup(req, res) {
  kafka.make_request('userTopic', {
    name: 'signup',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
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

export function signin(req, res) {
  kafka.make_request('userTopic', {
    name: 'signin',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
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

export function getUser(req, res) {
  kafka.make_request('userTopic', {
    name: 'getUser',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:

        // Updating Cache
        cacheClient.setex(req.params, 3600, JSON.stringify(response));


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

export function updateUser(req, res) {
  kafka.make_request('userTopic', {
    name: 'updateUser',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.del(req.params);
        cacheClient.del('allUsers');

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

export function deleteUser(req, res) {
  kafka.make_request('userTopic', {
    name: 'deleteUser',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.del(req.params);
        cacheClient.del('allUsers');

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

export function getAllUsers(req, res) {
  kafka.make_request('userTopic', {
    name: 'getAllUsers',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.setex('allUsers', 3600, JSON.stringify(response));

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

export function addCard(req, res) {
  kafka.make_request('userTopic', {
    name: 'addCard',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.del(req.params);
        cacheClient.del('allUsers');

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

export function deleteCard(req, res) {
  kafka.make_request('userTopic', {
    name: 'deleteCard',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.del(req.params);
        cacheClient.del('allUsers');

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
