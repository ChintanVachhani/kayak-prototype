// Import Actions
import { UPDATE_CARFORM, UPDATE_FLIGHTFORM, UPDATE_HOTELFORM, UPDATE_FORMTYPE, UPDATE_CITIES } from './HomeActions';
import { BOOKING_SUCCESS } from '../Billing/BillingActions';
import {UPDATE_FORMTYPEHEADER} from '../Header/HeaderActions';

// Initial State
const initialState = {
	carFormData : { place: '', toDate: '', fromDate: ''},
	flightFormData : { fromPlace: '', toPlace: '', departDate:'', returnDate: '', passengers: '', cabinClass: ''},
	hotelFormData : {place: '', checkin: '', checkout: '', rooms: ''},
  formType: '',
  message:'',
  cities:[],
  states:[]
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {

  	case UPDATE_CARFORM :
        console.log("in update car form reducer case");
       
        let temp = state.carFormData;
        temp.place = action.carDetails.place;
        temp.toDate = action.carDetails.toDate;
        temp.fromDate = action.carDetails.fromDate;
        console.log("this is tmep");
        console.log(temp.place);
           return {
               ...state,
               carFormData : temp
           };

    case UPDATE_FLIGHTFORM :
        console.log("in update flight form reducer case");
        
        temp = state.flightFormData;
        temp.fromPlace = action.flightDetails.fromPlace;
        temp.toPlace = action.flightDetails.toPlace;
        temp.departDate = action.flightDetails.departDate;
        temp.returnDate = action.flightDetails.returnDate;
        temp.passengers = action.flightDetails.passengers;
        temp.cabinClass = action.flightDetails.cabinClass;
        
           return {
               ...state,
               
               flightFormData : temp
           };

    case UPDATE_HOTELFORM :
        console.log("in update flight form reducer case");
        console.log("this is action user " + action.hotelDetails.username );
        temp = state.hotelFormData;
        temp.place = action.hotelDetails.place;
        temp.checkin = action.hotelDetails.checkin;
        temp.checkout = action.hotelDetails.checkout;
        temp.rooms = action.hotelDetails.rooms;
           return {
               ...state,
               hotelFormData : temp
           };
    case UPDATE_FORMTYPE :
           
          return {
               ...state,
               formType : action.displayForm
           };
    case UPDATE_CITIES :
           
          return {
               ...state,
               cities : action.cities,
               states:action.states
           };           

    case UPDATE_FORMTYPEHEADER :
        console.log("in update formtype coming from header");
        
          return {
               ...state,
               formType : action.displayForm
           };
    case BOOKING_SUCCESS :
           return {
               ...state,
               message : action.data.message
           };
    default:
      return state;
  }
};

export default HomeReducer;
