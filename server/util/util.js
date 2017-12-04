import {Router} from 'express';

const router = new Router();
let fs = require('fs');

const logger = require('../../kafka-backend/logger');

// Get Clicks per page count
router.get('/clicksPerPage', function (req, res, next) {
  const options = {
    /*from: new Date() - (24 * 60 * 60 * 1000),
    until: new Date(),
    limit: 10,
    start: 0,
    order: 'desc',*/
    fields: ['page'],
  };

  logger.query(options, function (err, results) {
    let clicksPerPageCount = {
      Car: 0,
      Hotel: 0,
      Flight: 0,
      Booking: 0,
    };
    if (err) {
      res.status(500).json({
        status: 500,
        title: 'Internal server error.',
        error: {message: 'Failed to fetch logs.'},
      })
    }
    console.log(results);
    for (let i = 0; i < results.length; ++i) {
      switch (results[i].page) {
        case 'Car':
          ++clicksPerPageCount.Car;
          break;
        case 'Hotel':
          ++clicksPerPageCount.Hotel;
          break;
        case 'Flight':
          ++clicksPerPageCount.Flight;
          break;
        case 'Booking':
          ++clicksPerPageCount.Booking;
          break;
      }
    }
    res.status(200).json({
      status: 200,
      title: 'Logs data retrieved.',
      error: {message: 'Successfully retrieved clicks per page count.'},
    })
  });
});

// Get Cities
router.get('/location', function (req, res, next) {
  let cities = [];

  function readLines(input, callback) {
    let remaining = '';
    input.on('data', function (data) {
      remaining += data;
      let index = remaining.indexOf('\n');
      while (index > -1) {
        let line = remaining.substring(0, index - 1);
        remaining = remaining.substring(index + 1);
        cities = [line, ...cities];
        index = remaining.indexOf('\n');
      }
      cities = [remaining, ...cities];
      callback(cities);
    });
  }

  let input = fs.createReadStream('cities.txt');
  readLines(input, function (cities) {
    let inputStates = fs.createReadStream('states.txt');
    readLines(inputStates, function (states) {
      res.status(200).json({
        cities: cities, states: states,
      });
    });
  });
});


export default router;
