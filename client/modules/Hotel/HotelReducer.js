// Import Actions
import {  } from './HotelActions';

// Initial State
const initialState = {hotelList: [{ id: "1", name:"Holiday Inn" ,address:"xyz san jose",city :"san jose",state :"ca",zipCode:"945001",star :"3",avgRatings:"",noReviews:"",price:{delux:"200",standard:"200",suite:"200"}}
          ,{ id: "2", name:"HolidayInn" ,address:"xyz san jose",city :"San jose",state :"ca",zipCode:"945001",star :"3",avgRatings:"7.7",noReviews:"30000",price:{delux:"200",standard:"200",suite:"200"}}]};

const HotelReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default HotelReducer;
