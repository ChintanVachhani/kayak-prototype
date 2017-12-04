import cacheClient from '../redis';

// Please put 'kafka' directory containing 'client.js', 'Connection.js' & 'kafkarpc.js', in the routes folder
let kafka = require('../routes/kafka/client');
var fs = require('fs');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './files');
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});

var upload = multer({
  storage: storage
}).any();

export function createFlight(req, res) {

  upload(req, res, function(err) {
    if (err) {
      res.send(JSON.stringify({ code: 500, msg: "File Upload Failed" }));
    } else {
      let name = req.files[0].originalname;
      let type = req.files[0].mimetype;
      fs.readFile("./files/" + name, "base64", function(err, data) {
        let imageData = { data: data, contentType: type };
        req.body.operatorImage = imageData;
        fs.unlink("./files/" + name, function(err) {

          kafka.make_request('flightTopic', {
            name: 'createFlight',
            headers: req.headers,
            params: req.params,
            query: req.query,
            body: req.body
          }, function(err, response) {
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

        });

      });
    }

  });
}

export function getFlight(req, res) {

  kafka.make_request('flightTopic', {
    name: 'getFlight',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function(err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.setex('flight' + req.params, 60, JSON.stringify(response));

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

export function updateFlight(req, res) {
  console.log("Update Flight : ", req)
  kafka.make_request('flightTopic', {
    name: 'updateFlight',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function(err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.del('flight' + req.params);
        cacheClient.del('allFlights');

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

export function deleteFlight(req, res) {
  kafka.make_request('flightTopic', {
    name: 'deleteFlight',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function(err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.del('flights' + req.params);
        cacheClient.del('allFlights');

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

export function getAllFlights(req, res) {
  kafka.make_request('flightTopic', {
    name: 'getAllFlights',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function(err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.setex('allFlights', 3600, JSON.stringify(response));

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

export function searchFlights(req, res) {
  kafka.make_request('flightTopic', {
    name: 'searchFlights',
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
