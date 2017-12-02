let Flight = require('../models/flight');

function handle_request(req, callback) {
  console.log("In handle request:" + JSON.stringify(req));

  let res;

  if (req.name === 'createFlight') {
    let flight = Flight({
      flightID: req.body.flightID,
      price: {
        economy: req.body.price.economy,
        business: req.body.price.business,
        firstClass: req.body.price.firstClass,
      },
      operator: req.body.operator,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      duration: req.body.duration,
      origin: req.body.origin,
      destination: req.body.destination,
      //operatorImage: req.body.operatorImage,
    });
    flight.save(function (error) {
      res = {
        status: 400,
        title: 'Invalid data.',
        error: {message: 'Failed to create flight.'},
      };
      callback(null, res);
    });

    res = {
      status: 201,
      message: 'Successfully created flight.',
      flight: flight,
    };

    callback(null, res);
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
    Flight.findOneAndUpdate({_id: req.params._id}, req.body, (error, flight) => {
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

}

exports.handle_request = handle_request;
