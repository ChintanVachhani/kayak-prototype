import { Router } from 'express';
import * as FlightController from '../controllers/flight.controller';

const router = new Router();


// Get All Flights
router.route('/all').get(FlightController.getAllFlights);

// Search Flights
router.route('/search').get(FlightController.searchFlights);

// Create Flight
router.route('/').put(FlightController.createFlight);

// Get Flight
router.route('/:_id').get(FlightController.getFlight);

// Delete Flight
router.route('/:_id').delete(FlightController.deleteFlight);

// Update Flight
router.route('/:_id').patch(FlightController.updateFlight);

export default router;
