import {Router} from 'express';
import * as FlightController from '../controllers/flight.controller';
import cacheClient from '../redis';

const router = new Router();

// Get All Flights
router.route('/').get(cacheAllFlights, FlightController.getAllFlights);

// Search Flights
router.route('/search').get(FlightController.searchFlights);

// Get Flight
router.route('/:_id').get(cacheFlight, FlightController.getFlight);

// Session Authentication
router.use('/', function (req, res, next) {
  jwt.verify(req.header.token, 'admin', function (error, decoded) {
    if (error) {
      return res.status(401).json({
        title: 'Not Authenticated.',
        error: error,
      });
    }
    next();
  });
});

// Create Flight
router.route('/').put(FlightController.createFlight);

// Delete Flight
router.route('/:_id').delete(FlightController.deleteFlight);

// Update Flight
router.route('/:_id').patch(FlightController.updateFlight);

function cacheFlight(req, res, next) {

  cacheClient.get('flight' + req.params, function (error, data) {
    if (error) {
      console.error(error);
    }
    if (data != null) {
      console.info('Cache Hit!');
      res.json(JSON.parse(data));
    } else {
      console.info('Cache Miss!');
      next();
    }
  });
}

function cacheAllFlights(req, res, next) {

  cacheClient.get('allFlights', function (error, data) {
    if (error) {
      console.error(error);
    }
    if (data != null) {
      console.info('Cache Hit!');
      res.json(JSON.parse(data));
    } else {
      console.info('Cache Miss!');
      next();
    }
  });
}

export default router;
