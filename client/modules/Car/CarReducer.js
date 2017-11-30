// Import Actions
import {  } from './CarActions';

// Initial State
const initialState = {carList: [{ id: "1", class : "Economy" ,  company: "Enterprise", model: "nissan", cap_persons: "4", cap_bags: '2', doors: '4', location: 'sanjose airport', price: '$15'}
          ,{ id: "2", class : "Luxury" ,  company: "Enterprise", model: "nissan", cap_persons: "4", cap_bags: '2', doors: '4', location: 'sanjose airport', price: '$15'}]};

const CarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CarReducer;
