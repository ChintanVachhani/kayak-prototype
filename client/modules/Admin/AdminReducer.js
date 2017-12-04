// Import Actions
import { CREATE_FLIGHT, ADMIN_SIGNIN, ADMIN_SIGNOUT, CREATE_HOTEL, CREATE_CAR, FLIGHT_LIST, HOTEL_LIST, CAR_LIST, BILL_LIST,LOCATION_DETAILS, D_HOTEL, D_FLIGHT, D_CAR, D_CITY } from './AdminActions';

const initialState = {
  carList: [],
  flightList: [],
  hotelList: [],
  billList:[],
  cities:[],
  states:[],
  dashboardCars:[],
  dashboardHotels:[],
  dashboardFlights:[],
  dashboardCityRevenue:[]
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_FLIGHT:
      return {
        ...state,
        flightList: action.flights,
        "msg": action.msg
      };

          case D_CITY:
      return {
        ...state,
        dashboardCityRevenue: action.city
      };
      

        case D_CAR:
      return {
        ...state,
        dashboardCars: action.cars
      };

        case D_FLIGHT:
      return {
        ...state,
        dashboardFlights: action.flights
      };

        case D_HOTEL:
      return {
        ...state,
        dashboardHotels: action.hotels
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
      if (action.status === 200) {
        localStorage.setItem("token", action.data.token);
        return {
          ...state,
          isLoggedIn: true,
          "msg": action.msg
        };
      } else {
        return {
          ...state,
          "msg": "Invalid Credentials",
          isLoggedIn: false
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
