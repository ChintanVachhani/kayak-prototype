import callApi from './../../util/apiCaller';
import {Router, browserHistory, Route} from 'react-router';

// Export Constants
export const FETCH_CARS = 'CREATE_FLIGHT';
export const FETCH_FLIGHTS = 'CREATE_HOTEL';
export const FETCH_HOTELS = 'ADMIN_SIGNIN';
export const SERVICE_DATA = 'SERVICE_DATA';
export const SET_SERVICE_BOOKING_DATA = 'SET_SERVICE_BOOKING_DATA';

// Export Actions

export function filterCars(data) {
  console.log("in fetching cars ", data);
  let url = "car/search?";
  url = url + "minPrice=" + data.carfromprice;
  url = url + "&maxPrice=" + data.cartoprice;
  console.log(data.carTypes);
  let i = 0;
  for (i = 0; i < data.carTypes.length; i++) {
    console.log(data.carTypes[i]);
    url = url + "&class=" + data.carTypes[i];
  }

  console.log(url);

  return (dispatch) => {
    return callApi(url, 'get').then(res => dispatch(success(res.cars)));
  };

  function success(cars) {
    return {type: FETCH_CARS, cars}
  }

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

  function success(flights) {
    return {type: FETCH_FLIGHTS, flights}
  }

}

export function filterHotels(data) {
  console.log("in filtering hotels ", data);
  let url = "hotel/search?";
  url = url + "minPrice=" + data.fromPrice;
  url = url + "&maxPrice=" + data.toPrice;
  url = url + "&star=" + (data.stars > 5 ? 0 : data.stars);

  console.log(url);
  return (dispatch) => {
    return callApi(url, 'get').then(res => dispatch(success(res.hotels)));
  };

  function success(hotels) {
    return {type: FETCH_HOTELS, hotels}
  }

}

export function getCarList(data) {
  console.log("getting all cars", data);
  let url = "car/search?";
  url = url + "location=" + data.place;
  console.log(url);

  return (dispatch) => {
    return callApi(url, 'get').then(res => dispatch(success(res.cars)));
  };

  function success(cars) {
    return {type: FETCH_CARS, cars}
  }

}

export function getFlightList(data) {
  let url = "flight/search?";
  url = url + "origin=" + data.fromPlace;
  url = url + "&destination=" + data.toPlace;

  console.log(url);

  return (dispatch) => {
    return callApi(url, 'get').then(res => dispatch(success(res.flights)));
  };

  function success(flights) {
    return {type: FETCH_FLIGHTS, flights}
  }

}

export function getHotelList(data) {
  console.log("getting all hotels", data);

  let url = "hotel/search?";
  url = url + "city=" + data.place;

  console.log(url);
  return (dispatch) => {
    return callApi(url, 'get').then(res => dispatch(success(res.hotels)));
  };

  function success(hotels) {
    return {type: FETCH_HOTELS, hotels}
  }

}

export function getServiceDetail(booking) {
  console.log("get service detail", booking);
  let url = booking.serviceType + '/' + bookingDetail.serviceId;
  return (dispatch) => {
    return callApi(url).then(res => dispatch(success(res)));
  };

  function success(res) {
    if (booking.serviceType == 'Car')
      return {type: SERVICE_DATA, serviceClicked: res.car};
    else if (booking.serviceType == 'Flight')
      return {type: SERVICE_DATA, serviceClicked: res.flight};
    else
      return {type: SERVICE_DATA, serviceClicked: res.hotel};
  }
}

export function serviceForBooking(service, type) {
  var name;
  if(type=='Hotel'){
    name = service.hotelName;
  }
  else {
    name = service.operator;
  }
  return dispatch => {
    dispatch(serviceBookingUpdate(service, type,name));
    browserHistory.push('/billing');
  }
}

export function serviceBookingUpdate(service, type,operator) {
  return {
    type: SET_SERVICE_BOOKING_DATA,
    serviceId: service._id,
    serviceType: type,
    serviceName: operator,
    price: service.price,
  }
}
