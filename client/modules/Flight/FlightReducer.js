// Import Actions
import {  } from './FlightActions';

// Initial State
const initialState = {flightList: [{ id: "1", flightID:"LX123", class : "Economy" , operator: "United", departureTime:"4:30", arrivalTime  :"18:00",origin:"San jose",destination  :"Delhi", price: '$15'}
          ,{ id: "1", flightID:"LX123", class : "Economy" , operator: "United", departureTime:"4:30", arrivalTime  :"18:00",origin:"San jose",destination  :"Delhi", price: '$15'}]};

const FlightReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default FlightReducer;
