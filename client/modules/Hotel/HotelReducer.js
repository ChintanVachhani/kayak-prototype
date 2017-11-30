// Import Actions
import {  } from './HotelActions';

// Initial State
const initialState = {hotelList: [{ id: "1", name:"Holiday Inn" ,address:"xyz san jose",city :"san jose",state :"ca",zipCode:"945001",stars :"3",ratings:"",reviews:"",room:[{type:"delux",price:"200"},{type:"standard",price:"100"}]}
          ,{ id: "2", name:"HolidayInn" ,address:"xyz san jose",city :"San jose",state :"ca",zipCode:"945001",stars :"3",ratings:"7.7",reviews:"30000",room:[{type:"delux",price:"200"},{type:"standard",price:"100"}]}]};

const HotelReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default HotelReducer;
