import {Router} from 'express';
import * as CarController from '../controllers/car.controller';
import cacheClient from '../redis';
import * as jwt from "jsonwebtoken";

const router = new Router();

// Get All Cars
router.route('/').get(cacheAllCars, CarController.getAllCars);

// Search Cars
router.route('/search').get(CarController.searchCars);

// Get Car
router.route('/:_id').get(cacheCar, CarController.getCar);

// Session Authentication
router.use('/', function (req, res, next) {
  console.error('Token', req.header);
  jwt.verify(req.headers.token, 'admin', function (error, decoded) {
    if (error) {
      return res.status(401).json({
        title: 'Not Authenticated.',
        error: error,
      });
    }
    next();
  });
});

// Create Car
router.route('/').put(CarController.createCar);

// Delete Car
router.route('/:_id').delete(CarController.deleteCar);

// Update Car
router.route('/:_id').patch(CarController.updateCar);

function cacheCar(req, res, next) {

  cacheClient.get('car' + req.params, function (error, data) {
    if (error) {
      console.error(error);
    }
    if (data != null) {
      console.error('Cache Hit!');
      res.json(JSON.parse(data));
    } else {
      console.error('Cache Miss!');
      next();
    }
  });
}

function cacheAllCars(req, res, next) {

  cacheClient.get('allCars', function (error, data) {
    if (error) {
      console.error(error);
    }
    if (data != null) {
      console.error('Cache Hit!');
      res.json(JSON.parse(data));
    } else {
      console.error('Cache Miss!');
      next();
    }
  });
}

export default router;
