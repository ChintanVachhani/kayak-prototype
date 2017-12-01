import { Router } from 'express';
import * as HotelController from '../controllers/hotel.controller';

const router = new Router();

// Create Hotel
router.route('/').put(HotelController.createHotel);

// Get Hotel
router.route('/:cuid').get(HotelController.getHotel);

// Delete Hotel
router.route('/:cuid').delete(HotelController.deleteHotel);

// Update Hotel
router.route('/:cuid').patch(HotelController.updateHotel);

// Get All Hotel
router.route('/').get(HotelController.getAllHotels);

export default router;
