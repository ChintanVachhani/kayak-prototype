import { Router } from 'express';
import * as CarController from '../controllers/car.controller';

const router = new Router();

// Get All Cars
router.route('/all').get(CarController.getAllCars);

// Search Cars
router.route('/search').get(CarController.searchCars);

// Create Car
router.route('/').put(CarController.createCar);

// Get Car
router.route('/:_id').get(CarController.getCar);

// Delete Car
router.route('/:_id').delete(CarController.deleteCar);

// Update Car
router.route('/:_id').patch(CarController.updateCar);

export default router;
