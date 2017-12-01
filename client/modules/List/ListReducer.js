// Import Actions
import {  } from './ListActions';

// Initial State
const initialState = {
	carList: [{ id: "1", class : "Economy" ,  operator: "Enterprise", model: "nissan", capPersons: "4", capBags: '2', doors: '4', location: 'sanjose airport', price: '$15'}
          ,{ id: "2", class : "Luxury" ,  operator: "Enterprise", model: "nissan", capPersons: "4", capBags: '2', doors: '4', location: 'sanjose airport', price: '$15'}],
    flightList: [{ id: "1", flightID:"LX123", operator: "United", departureTime:"4:30", arrivalTime  :"18:00",origin:"San jose",destination  :"Delhi", price: {economy:'$15'}}
          ,{ id: "1", flightID:"LX123", class : "Economy" , operator: "United", departureTime:"4:30", arrivalTime  :"18:00",origin:"San jose",destination  :"Delhi", price: '$15'}],
	hotelList: [{ id: "1", name:"Holiday Inn" ,address:"xyz san jose",city :"san jose",state :"ca",zipCode:"945001",star :"3",avgRatings:"",noReviews:"",price:{delux:"200",standard:"200",suite:"200"}}
          ,{ id: "2", name:"HolidayInn" ,address:"xyz san jose",city :"San jose",state :"ca",zipCode:"945001",star :"3",avgRatings:"7.7",noReviews:"30000",price:{delux:"200",standard:"200",suite:"200"}}]};      		


const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ListReducer;
