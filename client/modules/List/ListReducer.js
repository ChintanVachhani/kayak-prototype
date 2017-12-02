// Import Actions
import {  } from './ListActions';

// Initial State
const initialState = {
	carList: [],
    flightList: [],
	hotelList: []};      		


const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ListReducer;
