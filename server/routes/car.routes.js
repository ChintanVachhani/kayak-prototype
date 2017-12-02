import { Router } from 'express';
import * as CarController from '../controllers/car.controller';

const router = new Router();

// Create Car
router.route('/').put(CarController.createCar);

// Get Car
router.route('/:_id').get(CarController.getCar);

// Delete Car
router.route('/:_id').delete(CarController.deleteCar);

// Update Car
router.route('/:_id').patch(CarController.updateCar);

// Get All Car
router.route('/all').get(CarController.getAllCars);

export default router;
