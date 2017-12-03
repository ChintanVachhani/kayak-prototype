import callApi from './../../util/apiCaller';

// Export Constants
export const FETCH_CARS = 'CREATE_FLIGHT';
export const FETCH_FLIGHTS = 'CREATE_HOTEL';
export const FETCH_HOTELS = 'ADMIN_SIGNIN';

// Export Actions

export function filterCars(data) {	
  console.log("in fetching cars ", data);
  let url = "car/search?";
  url = url + "minPrice=" + data.carfromprice;
  url = url + "&maxPrice=" + data.cartoprice;
  console.log(data.carTypes);
  let i=0;
  for (i=0; i<data.carTypes.length;i++){
  	console.log(data.carTypes[i]);
  	url = url + "&class=" + data.carTypes[i];
  }

  console.log(url);

  return (dispatch) => {
    return callApi(url, 'get').then(res => dispatch(success(res.cars)));
  };

  function success(payload) { return { type: FETCH_CARS, payload } }

}

export function filterFlights(data) {
  console.log("in filtering flights ", data);
  let url = "flight/search?";
  url = url + "minPrice=" + data.fromPrice;
  url = url + "&maxPrice=" + data.toPrice;
  url = url + "&minArrivalTime=" + data.fromArrivalTime + "00";
  url = url + "&maxArrivalTime=" + data.toArrivalTime + "00";
  url = url + "&minDepartureTime=" + data.fromDepTime + "00";
  url = url + "&maxDepartureTime=" + data.toDepTime + "00";

  console.log(url);
  
  return (dispatch) => {
    return callApi(url, 'get').then(res => dispatch(success(res.flights)));
  };

  function success(payload) { return { type: FETCH_FLIGHTS, payload } }

}

export function filterHotels(data) {
  console.log("in filtering hotels ", data);
  let url = "hotel/search?";
  url = url + "minPrice=" + data.fromPrice;
  url = url + "&maxPrice=" + data.toPrice;
  url = url + "&star=" + (data.stars > 5 ? 0:data.stars);
  
  console.log(url);
  return (dispatch) => {
    return callApi(url, 'get').then(res => dispatch(success(res.hotels)));
  };

  function success(payload) { return { type: FETCH_HOTELS, payload } }

}

export function getCarList(data){
	console.log("getting all cars", data);
  let url = "car/search?";
  url = url + "location=" + data.place;
  console.log(url);

  return (dispatch) => {
    return callApi(url, 'get').then(res => dispatch(success(res.cars)));
  };

  function success(payload) { return { type: FETCH_CARS, payload } }

}

export function getFlightList(data){
  let url = "flight/search?";
  url = url + "origin=" + data.fromPlace;
  url = url + "&destination=" + data.toPlace;

  console.log(url);
  
  return (dispatch) => {
    return callApi(url, 'get').then(res => dispatch(success(res.flights)));
  };

  function success(payload) { return { type: FETCH_FLIGHTS, payload } }

}

export function getHotelList(data){
	console.log("getting all hotels", data);

  let url = "hotel/search?";
  url = url + "city=" + data.place;
  
  console.log(url);
  return (dispatch) => {
    return callApi(url, 'get').then(res => dispatch(success(res.hotels)));
  };

	function success(payload) { return { type: FETCH_HOTELS, payload } }

}

/*
function updateCarList(payload) {
  return {
    type: FETCH_CARS,
    cars: payload.cars
  }

*/