/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import car from './modules/Car/CarReducer';
import flight from './modules/Flight/FlightReducer';
import hotel from './modules/Hotel/HotelReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  car,
  flight,
  hotel
});
