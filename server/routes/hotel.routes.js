import { Router } from 'express';
import * as HotelController from '../controllers/hotel.controller';

const router = new Router();

// Get All Hotels
router.route('/all').get(HotelController.getAllHotels);

// Search Hotels
router.route('/search').get(HotelController.searchHotels);

// Create Hotel
router.route('/').put(HotelController.createHotel);

// Get Hotel
router.route('/:_id').get(HotelController.getHotel);

// Delete Hotel
router.route('/:_id').delete(HotelController.deleteHotel);

// Update Hotel
router.route('/:_id').patch(HotelController.updateHotel);

export default router;
