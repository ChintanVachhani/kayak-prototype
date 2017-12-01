// Import Actions
import { UPDATE_CARFORM, UPDATE_FLIGHTFORM, UPDATE_HOTELFORM } from './HomeActions';

// Initial State
const initialState = {
	carFormData : { place: '', toDate: '', fromDate: ''},
	flightFormData : { fromPlace: '', toPlace: '', departDate:'', returnDate: '', passengers: '', cabinClass: ''},
	hotelFormData : {place: '', checkin: '', checkout: '', rooms: ''}
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {

  	case UPDATE_CARFORM :
        console.log("in update car form reducer case");
        
        temp = this.state.carFormData;
        temp.place : action.carDetails.place;
        temp.toDate : action.carDetails.toDate;
        temp.fromDate : action.carDetails.fromDate;
        
           return {
               ...state,
               
               carFormData : temp
           };

    case UPDATE_FLIGHTFORM :
        console.log("in update flight form reducer case");
        
        temp = this.state.flightFormData;
        temp.fromPlace : action.flightDetails.fromPlace;
        temp.toPlace : action.flightDetails.toPlace;
        temp.departDate : action.flightDetails.departDate;
        temp.returnDate : action.flightDetails.returnDate;
        temp.passengers : action.flightDetails.passengers;
        temp.cabinClass : action.flightDetails.cabinClass;
        
           return {
               ...state,
               
               flightFormData : temp
           };

    case UPDATE_HOTELFORM :
        console.log("in update flight form reducer case");
        console.log("this is action user " + action.hotelDetails.username );
        temp = this.state.hotelFormData;
        temp.place : action.hotelDetails.place;
        temp.checkin : action.hotelDetails.checkin;
        temp.checkout : action.hotelDetails.checkout;
        temp.rooms : action.hotelDetails.rooms;
        
        
           return {
               ...state,
               
               hotelFormData : temp
           };

    default:
      return state;
  }
};

export default HomeReducer;
