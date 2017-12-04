import {Router} from 'express';
import * as BookingController from '../controllers/booking.controller';
import cacheClient from '../redis';
import * as jwt from "jsonwebtoken";

const router = new Router();

// Get All Bookings for User
router.route('/all/:email').get(BookingController.getAllBookings);

// Session Authentication
router.use('/', function (req, res, next) {
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

// Get All Bookings
router.route('/').get(cacheAllBookings, BookingController.getAllBookings);

// Search Bookings
router.route('/search').get(BookingController.searchBookings);

// Top 10 Bookings based on revenue/year
router.route('/topYearRevenue').get(BookingController.topTenBasedOnYearRevenue);

// City based revenue Bookings
router.route('/cityRevenue').get(BookingController.cityBasedRevenue);

// Top 10 Bookings based on revenue for a month
router.route('/topMonthRevenue').get(BookingController.topTenBasedOnMonthRevenue);

// Create Booking
router.route('/').put(BookingController.createBooking);

// Get Booking
router.route('/:cuid').get(cacheBooking, BookingController.getBooking);

// Delete Booking
router.route('/:cuid').delete(BookingController.deleteBooking);

// Update Booking
router.route('/:cuid').patch(BookingController.updateBooking);

function cacheBooking(req, res, next) {

  cacheClient.get('booking' + req.params, function (error, data) {
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

function cacheAllBookings(req, res, next) {

  cacheClient.get('allBookings', function (error, data) {
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
