/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import admin from './modules/Admin/AdminReducer';
import header from './modules/Header/HeaderReducer';
import home from './modules/Home/HomeReducer';
import list from './modules/List/ListReducer';


// Combine all reducers into one root reducer
export default combineReducers({
  app,
  admin,
  header,
  home,
  list

});
