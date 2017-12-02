import { Router } from 'express';
import * as BookingController from '../controllers/booking.controller';

const router = new Router();

// Create Booking
router.route('/').put(BookingController.createBooking);

// Get Booking
router.route('/:cuid').get(BookingController.getBooking);

// Delete Booking
router.route('/:cuid').delete(BookingController.deleteBooking);

// Update Booking
router.route('/:cuid').patch(BookingController.updateBooking);

// Get All Booking
router.route('/all').get(BookingController.getAllBookings);

export default router;
