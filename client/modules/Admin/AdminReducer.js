// Import Actions
import { CREATE_FLIGHT, ADMIN_SIGNIN, ADMIN_SIGNOUT, CREATE_HOTEL, CREATE_CAR, FLIGHT_LIST, HOTEL_LIST, CAR_LIST, BILL_LIST,LOCATION_DETAILS } from './AdminActions';

const initialState = {
  carList: [],
  flightList: [],
  hotelList: [],
  billList:[],
  cities:[],
  states:[]
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_FLIGHT:
      return {
        ...state,
        flightList: action.flights,
        "msg": action.msg
      };


    case FLIGHT_LIST:
      return {
        ...state,
        flightList: action.flights
      };


    case HOTEL_LIST:
      return {
        ...state,
        hotelList: action.hotels
      };

    case CAR_LIST:
      return {
        ...state,
        carList: action.cars
      };

    case BILL_LIST:
      return {
        ...state,
        billList: action.bills
      };


    case CREATE_CAR:
      return {
        ...state,
        carList: action.cars,
        "msg": action.msg
      };

    case CREATE_HOTEL:
      return {
        ...state,
        hotelList: action.hotels,
        "msg": action.msg
      };

    case ADMIN_SIGNIN:
      console.log("staus : ", action.data)
      if (action.status === 200) {
        return {
          ...state,
          isLoggedIn: true,
          "msg": action.msg
        };
      } else {
        if (action.data.error !== undefined) {
          return {
            ...state,
            "msg": action.data.error.message
          }
        } else {
          return {
            ...state,
            isLoggedIn: true
          }
        }

      }

    case ADMIN_SIGNOUT:
      return {
        ...state,
        "isLoggedIn": false
      };

    case LOCATION_DETAILS:
      return {
        ...state,
        "cities":action.cities,
        "states":action.states
      };      


    default:
      return state;
  }
};

export default AdminReducer;
