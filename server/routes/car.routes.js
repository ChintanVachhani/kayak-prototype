import { Router } from 'express';
import * as CarController from '../controllers/car.controller';

const router = new Router();

// Create Car
router.route('/').put(CarController.createCar);

// Get Car
router.route('/:cuid').get(CarController.getCar);

// Delete Car
router.route('/:cuid').delete(CarController.deleteCar);

// Update Car
router.route('/:cuid').patch(CarController.updateCar);

// Get All Car
router.route('/all').get(CarController.getAllCars);

export default router;
