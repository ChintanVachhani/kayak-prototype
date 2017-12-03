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

export function createHotel(req, res) {

  upload(req, res, function(err) {
    if (err) {
      res.send(JSON.stringify({ code: 500, msg: "File Upload Failed" }));
    } else {
      let name = req.files[0].originalname;
      let type = req.files[0].mimetype;
      fs.readFile("./files/" + name, "base64", function(err, data) {
        let imageData = { data: data, contentType: type };
        req.body.hotelImage = imageData;
        fs.unlink("./files/" + name, function(err) {

          kafka.make_request('hotelTopic', {
            name: 'createHotel',
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

export function getHotel(req, res) {
  kafka.make_request('hotelTopic', {
    name: 'getHotel',
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
}

export function updateHotel(req, res) {
  kafka.make_request('hotelTopic', {
    name: 'updateHotel',
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
}

export function deleteHotel(req, res) {
  kafka.make_request('hotelTopic', {
    name: 'deleteHotel',
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
}

export function getAllHotels(req, res) {
  kafka.make_request('hotelTopic', {
    name: 'getAllHotels',
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
}

export function searchHotels(req, res) {
  kafka.make_request('hotelTopic', {
    name: 'searchHotels',
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
