import { Router } from 'express';
import * as FlightController from '../controllers/flight.controller';

const router = new Router();

// Create Flight
router.route('/').put(FlightController.createFlight);

// Get Flight
router.route('/:_id').get(FlightController.getFlight);

// Delete Flight
router.route('/:_id').delete(FlightController.deleteFlight);

// Update Flight
router.route('/:_id').patch(FlightController.updateFlight);

// Get All Flight
router.route('/all').get(FlightController.getAllFlights);

export default router;
