// Import Actions
import { UPDATE_CARFORM, UPDATE_FLIGHTFORM, UPDATE_HOTELFORM, UPDATE_FORMTYPE } from './HomeActions';

import {UPDATE_FORMTYPEHOME} from '../Header/HeaderActions';

// Initial State
const initialState = {
	carFormData : { place: '', toDate: '', fromDate: ''},
	flightFormData : { fromPlace: '', toPlace: '', departDate:'', returnDate: '', passengers: '', cabinClass: ''},
	hotelFormData : {place: '', checkin: '', checkout: '', rooms: ''},
  formType : ''
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {

  	case UPDATE_CARFORM :
        console.log("in update car form reducer case");
        
        temp = this.state.carFormData;
        temp.place = action.carDetails.place;
        temp.toDate = action.carDetails.toDate;
        temp.fromDate = action.carDetails.fromDate;
        
           return {
               ...state,
               
               carFormData : temp
           };

    case UPDATE_FLIGHTFORM :
        console.log("in update flight form reducer case");
        
        temp = this.state.flightFormData;
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
        
        temp = this.state.hotelFormData;
        temp.place = action.hotelDetails.place;
        temp.checkin = action.hotelDetails.checkin;
        temp.checkout = action.hotelDetails.checkout;
        temp.rooms = action.hotelDetails.rooms;

    case UPDATE_FORMTYPEHOME :
        console.log("in update formtype coming from header");
        
          return {
               ...state,
               
               formType : action.displayForm
           };

    case UPDATE_FORMTYPE :
        console.log("in update formtype coming from home");
       
          return {
               ...state,
               
               formType : action.displayForm
           };
    default:
      return state;
  }
};

export default HomeReducer;
