// Import Actions
import { FETCH_CARS, FETCH_FLIGHTS, FETCH_HOTELS,SERVICE_DATA,SET_SERVICE_BOOKING_DATA} from './ListActions';

// Initial State
const initialState = {
	carList: [],
  flightList: [],
	hotelList: [],
  serviceClickedDetail:null,
  serviceId:null,
  serviceType:null,
  price:null
};      		


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
    case SERVICE_DATA:
      return {
        ...state,
        serviceClickedDetail: action.serviceClicked
    };    
    case SET_SERVICE_BOOKING_DATA:
      return {
        ...state,
        serviceId: action.serviceId,
        serviceType: action.serviceType,
        price: action.price
    };     

    default:
      return state;
  }
};

export default ListReducer;
