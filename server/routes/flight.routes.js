import { Router } from 'express';
import * as FlightController from '../controllers/flight.controller';

const router = new Router();

// Create Flight
router.route('/').put(FlightController.createFlight);

// Get Flight
router.route('/:cuid').get(FlightController.getFlight);

// Delete Flight
router.route('/:cuid').delete(FlightController.deleteFlight);

// Update Flight
router.route('/:cuid').patch(FlightController.updateFlight);

// Get All Flight
router.route('/').get(FlightController.getAllFlights);

export default router;
