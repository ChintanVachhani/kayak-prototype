import {Router} from 'express';

const router = new Router();
let fs = require('fs');

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
