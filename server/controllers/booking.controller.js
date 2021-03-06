import cacheClient from '../redis';

// Please put 'kafka' directory containing 'client.js', 'Connection.js' & 'kafkarpc.js', in the routes folder
let kafka = require('../routes/kafka/client');

export function createBooking(req, res) {
  kafka.make_request('bookingTopic', {
    name: 'createBooking',
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

export function getBooking(req, res) {
  kafka.make_request('bookingTopic', {
    name: 'getBooking',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.setex('booking' + req.params, 60, JSON.stringify(response));

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

export function updateBooking(req, res) {
  kafka.make_request('bookingTopic', {
    name: 'updateBooking',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.del('booking' + req.params);
        cacheClient.del('allBookings');

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

export function deleteBooking(req, res) {
  kafka.make_request('bookingTopic', {
    name: 'deleteBooking',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.del('booking' + req.params);
        cacheClient.del('allBookings');

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

export function getAllBookings(req, res) {
  kafka.make_request('bookingTopic', {
    name: 'getAllBookings',
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  }, function (err, response) {
    console.log('in result--->');
    console.log(response);

    switch (response.status) {
      case 200:
        // Updating Cache
        cacheClient.setex('allBookings', 3600, JSON.stringify(response));

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

export function getAllBookingsForUser(req, res) {
  kafka.make_request('bookingTopic', {
    name: 'getAllBookingsForUser',
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

export function searchBookings(req, res) {
  kafka.make_request('bookingTopic', {
    name: 'searchBookings',
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

export function topTenBasedOnYearRevenue(req, res) {
  kafka.make_request('bookingTopic', {
    name: 'topTenBasedOnYearRevenue',
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

export function cityBasedRevenue(req, res) {
  kafka.make_request('bookingTopic', {
    name: 'cityBasedRevenue',
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

export function topTenBasedOnMonthRevenue(req, res) {
  kafka.make_request('bookingTopic', {
    name: 'topTenBasedOnMonthRevenue',
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
