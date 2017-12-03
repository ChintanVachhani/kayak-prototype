import * as API from './api/AdminApi';
import callApi from './../../util/apiCaller';

// Export Constants
export const CREATE_FLIGHT = 'CREATE_FLIGHT';
export const CREATE_HOTEL = 'CREATE_HOTEL';
export const ADMIN_SIGNIN = 'ADMIN_SIGNIN';
export const ADMIN_SIGNOUT = 'ADMIN_SIGNOUT';
export const CREATE_CAR = 'CREATE_CAR';


// Export Actions
export function createFlight(data) {
  console.log("ss ", data)
  return (dispatch) => {
    return callApi('flight', 'put', data, "upload").then(res => dispatch(createFlightResponse(res)));
  };

}

function createFlightResponse(res) {
  return (dispatch) => {
    return callApi('flight').then(res => dispatch(updateFlightList(res)));
  };
}

function updateFlightList(data) {
  return {
    type: CREATE_FLIGHT,
    msg: "New Flight Created",
    flights: data.flights
  }
}

export function adminsignin(data) {
  let req = {};
  req.email = data.email;
  req.password = data.password;
  req.isAdmin = true;

  return (dispatch) => {
    return callApi('/user/login', 'post', req).then(res => dispatch(adminlogin(res)));
  };
}

function adminlogin(responseData) {
  return {
    type: ADMIN_SIGNIN,
    data: responseData,
    status: responseData.status
  }
}

export function adminsignout() {
   return {
    type: ADMIN_SIGNOUT
  }  
}

export function createHotel(data) {
  return (dispatch) => {
    return callApi('hotel', 'put', data, "upload").then(res => dispatch(createHotelResponse(res)));
  };

}

function createHotelResponse(res) {
  return (dispatch) => {
    return callApi('hotel').then(res => dispatch(updateHotelList(res)));
  };
  
}

function updateHotelList(data) {
  return {
    type: CREATE_HOTEL,
    msg: "New Hotel Created",
    hotels: data.hotels
  }
}

export function createCar(data) {
  return (dispatch) => {
    return callApi('car', 'put', data, "upload").then(res => dispatch(createCarResponse(res)));
  };
}

function createCarResponse(res) {
  return (dispatch) => {
    return callApi('car').then(res => dispatch(updateCarList(res)));
  };
  
}

function updateCarList(data) {
  return {
    type: CREATE_CAR,
    msg: "New Car Created",
    cars: data.cars
  }
}