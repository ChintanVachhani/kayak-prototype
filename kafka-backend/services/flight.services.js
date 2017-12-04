let Flight = require('../models/flight');

const logger = require('../logger');
let jwt = require('jsonwebtoken');

function handle_request(req, callback) {
  console.log("In handle request:" + JSON.stringify(req));

  let res;
  let decoded = jwt.decode(req.query.token);

  if (req.name === 'createFlight') {
    let flight = Flight({
      flightID: req.body.flightID,
      price: {
        economy: req.body.economy,
        business: req.body.business,
        firstClass: req.body.firstClass,
      },
      operator: req.body.operator,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      duration: req.body.duration,
      origin: req.body.origin,
      destination: req.body.destination,
      operatorImage: req.body.operatorImage,
    });
    flight.save(function (error) {
      if (error) {
        res = {
          status: 400,
          title: 'Invalid data.',
          error: {message: 'Failed to create flight.'},
        };
        callback(null, res);
      }
      else {
        res = {
          status: 201,
          message: 'Successfully created flight.',
          flight: flight,
        };
        callback(null, res);
      }
    });


  }

  if (req.name === 'getFlight') {
    Flight.findOne({_id: req.params._id}, (error, flight) => {
      if (error || !flight) {
        res = {
          status: 404,
          title: 'Flight not found.',
          error: {message: 'Failed to retrieve flight.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully retrieved flight.',
          flight: flight,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'updateFlight') {
    console.log("id : ", req.params._id)
    Flight.findOneAndUpdate({_id: req.params._id}, req.body, (error, flight) => {
      console.log("Error : ", error)
      if (error || !flight) {
        res = {
          status: 404,
          title: 'Flight not found.',
          error: {message: 'Failed to update flight.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully updated flight.',
          flight: req.body,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'deleteFlight') {
    Flight.findOneAndRemove({_id: req.params._id}, (error, flight) => {
      if (error || !flight) {
        res = {
          status: 404,
          title: 'Flight not found.',
          error: {message: 'Failed to delete flight.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully deleted flight.',
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'getAllFlights') {

    if(decoded !== null && decoded.user.email !== null)
      logger.info({page: 'Flight', user: decoded.user.email});
    else
      logger.info({page: 'Flight', user: ''});

    Flight.find({}, (error, flights) => {
      if (error) {
        res = {
          status: 500,
          title: 'Flights not retrieved.',
          error: {message: 'Failed to retrieve flights.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully retrieved all flights.',
          flights: flights,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'searchFlights') {

    if(decoded !== null && decoded.user.email !== null)
      logger.info({page: 'Flight', user: decoded.user.email});
    else
      logger.info({page: 'Flight', user: ''});

    //Naive logic - to be optimized later
    let conditions = [];

    if (req.query.origin !== undefined) {
      conditions.push({origin: req.query.origin});
    }
    if (req.query.destination !== undefined) {
      conditions.push({destination: req.query.destination});
    }
    if (req.query.minPrice !== undefined) {
      conditions.push({price: {$gte: req.query.minPrice}});
    }
    if (req.query.maxPrice !== undefined) {
      conditions.push({price: {$lte: req.query.maxPrice}});
    }
    if (req.query.minDepartureTime !== undefined) {
      conditions.push({departureTime: {$gte: req.query.minDepartureTime}});
    }
    if (req.query.maxDepartureTime !== undefined) {
      conditions.push({departureTime: {$lte: req.query.maxDepartureTime}});
    }
    if (req.query.minArrivalTime !== undefined) {
      conditions.push({arrivalTime: {$gte: req.query.minArrivalTime}});
    }
    if (req.query.maxArrivalTime !== undefined) {
      conditions.push({arrivalTime: {$lte: req.query.maxArrivalTime}});
    }

    Flight.find({$and: conditions}, (error, flights) => {
      if (error) {
        console.error(error);
        res = {
          status: 500,
          title: 'Flights not retrieved.',
          error: {message: 'Failed to retrieve flights.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully retrieved all flights.',
          flights: flights,
        };
        callback(null, res);
      }
    });
  }

}

exports.handle_request = handle_request;
