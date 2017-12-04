import {Router} from 'express';
import * as HotelController from '../controllers/hotel.controller';
import cacheClient from '../redis';

const router = new Router();

// Get All Hotels
router.route('/').get(cacheAllHotels, HotelController.getAllHotels);

// Search Hotels
router.route('/search').get(HotelController.searchHotels);

// Get Hotel
router.route('/:_id').get(cacheHotel, HotelController.getHotel);

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

// Create Hotel
router.route('/').put(HotelController.createHotel);

// Delete Hotel
router.route('/:_id').delete(HotelController.deleteHotel);

// Update Hotel
router.route('/:_id').patch(HotelController.updateHotel);

function cacheHotel(req, res, next) {

  cacheClient.get('hotel' + req.params, function (error, data) {
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

function cacheAllHotels(req, res, next) {

  cacheClient.get('allHotels', function (error, data) {
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
