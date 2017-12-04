// Import Actions
import { FETCH_CARS, FETCH_FLIGHTS, FETCH_HOTELS  } from './ListActions';

// Initial State
const initialState = {
	carList: [],
  flightList: [],
	hotelList: []};      		


const ListReducer = (state = initialState, action) => {
  switch (action.type) {

  	case FETCH_CARS:
      return {
        ...state,
        carList: action.cars
    };

    case FETCH_FLIGHTS:
      return {
        ...state,
        flightList: action.flights
    };
    
    case FETCH_HOTELS:
      return {
        ...state,
        hotelList: action.hotels
    };

    default:
      return state;
  }
};

export default ListReducer;
