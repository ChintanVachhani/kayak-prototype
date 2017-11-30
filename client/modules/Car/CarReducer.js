// Import Actions
import {  } from './CarActions';

// Initial State
const initialState = {carList: [{ id: "1", class : "Economy" ,  operator: "Enterprise", model: "nissan", capPersons: "4", capBags: '2', doors: '4', location: 'sanjose airport', price: '$15'}
          ,{ id: "2", class : "Luxury" ,  operator: "Enterprise", model: "nissan", capPersons: "4", capBags: '2', doors: '4', location: 'sanjose airport', price: '$15'}]};

const CarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CarReducer;
