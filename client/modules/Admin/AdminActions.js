import * as API from './api/AdminApi';
import callApi from './../../util/apiCaller';

// Export Constants
export const CREATE_FLIGHT = 'CREATE_FLIGHT';
export const CREATE_HOTEL = 'CREATE_HOTEL';
export const ADMIN_SIGNIN = 'ADMIN_SIGNIN';
export const ADMIN_SIGNOUT = 'ADMIN_SIGNOUT';
export const CREATE_CAR = 'CREATE_CAR';
export const FLIGHT_LIST = 'FLIGHT_LIST';
export const HOTEL_LIST = 'HOTEL_LIST';
export const CAR_LIST = 'CAR_LIST';
export const BILL_LIST = 'BILL_LIST';
export const LOCATION_DETAILS = 'LOCATION_DETAILS';
export const D_CAR = 'D_CAR';
export const D_FLIGHT = 'D_FLIGHT';
export const D_HOTEL = 'D_HOTEL';
export const D_CITY = 'D_CITY';
export const USER_LIST = 'USER_LIST';


// Export Actions
export function createFlight(data) {
  console.log("ss ", data)
  return (dispatch) => {
    return callApi('flight', 'put', data, "upload").then(res => dispatch(createFlightResponse(res)));
  };

}

function createFlightResponse(res) {
  return (dispatch) => {
    return callApi('flight').then(res => dispatch(updateFlightList(res, "New Flight Created")));
  };
}

function updateFlightList(data, msg) {
  return {
    type: CREATE_FLIGHT,
    msg: msg,
    flights: data.flights
  }
}

export function adminsignin(data) {
  console.log("admin ", data)
  let req = {};
  req.email = data.email;
  req.password = data.password;
  req.isAdmin = true;

  return (dispatch) => {
    return callApi('user/signin', 'post', req).then(res => dispatch(adminlogin(res)));
  };
}

function adminlogin(responseData) {
  console.log("dd ", responseData)
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

export function locationUpdate(data) {
    return {
     type : LOCATION_DETAILS,
     cities:data.cities,
     states:data.states                                // this is same as newItem : newItem in ES6
    }                               
}


export function populateCityRevenueData() {
return (dispatch) => {
    return callApi('booking/cityRevenue', 'get').then(res => dispatch(dashboardUpdateCityRevenue(res)));
  };
}

function dashboardUpdateCityRevenue(data) {

 return {
    type: D_CITY,
    city: data.bookings
  }
 
}
export function populateCarDashBoardData() {
return (dispatch) => {
    return callApi('booking/topMonthRevenue?serviceType=Car', 'get').then(res => dispatch(dashboardUpdateCar(res)));
  };
}

export function populateFlightDashBoardData() {
   return (dispatch) => {
    return callApi('booking/topMonthRevenue?serviceType=Flight', 'get').then(res => dispatch(dashboardUpdateFlight(res)));
  };
}

export function populateHotelDashBoardData() {
   return (dispatch) => {
    return callApi('booking/topMonthRevenue?serviceType=Hotel', 'get').then(res => dispatch(dashboardUpdateHotel(res)));
  }; 
}

function dashboardUpdateCar(carData) {

  return {
    type: D_CAR,
    cars: carData.bookings
  }
 
}

function dashboardUpdateFlight(flightData) {

 return {
    type: D_FLIGHT,
    flights: flightData.bookings
  }
}

function dashboardUpdateHotel(hotelData) {
 return {
    type: D_HOTEL,
    hotels: hotelData.bookings
  }
  
}

export function populateCities(){
return (dispatch) => {
return callApi('util/location', 'get').then(res => dispatch(locationUpdate(res)));
  };
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

export function getAllFlights() {
  return (dispatch) => {
    return callApi('flight').then(res => dispatch(flightList(res)));
  };

}

function flightList(data) {
  return {
    type: FLIGHT_LIST,
    flights: data.flights
  }
}

export function getAllHotels() {
  return (dispatch) => {
    return callApi('hotel').then(res => dispatch(hotelList(res)));
  };

}

function hotelList(data) {
  return {
    type: HOTEL_LIST,
    hotels: data.hotels
  }
}

export function getAllCars() {
  return (dispatch) => {
    return callApi('car').then(res => dispatch(carList(res)));
  };

}

function carList(data) {
  return {
    type: CAR_LIST,
    cars: data.cars
  }
}

export function getAllBills() {
  return (dispatch) => {
    return callApi('booking').then(res => dispatch(billList(res)));
  };

}

function billList(data) {
  return {
    type: BILL_LIST,
    bills: data.bookings
  }
}


export function searchBillsByDate(query) {
  
  let date = query.substring(5)+"-"+query.substring(0,4);
  return (dispatch) => {
    return callApi("booking/search?date="+date).then(res => dispatch(billListByDate(res)));
  };

}


export function searchBillsByMonth(query) {
  return (dispatch) => {
    return callApi("booking/search?month="+query).then(res => dispatch(billListByDate(res)));
  };

}

function billListByDate(data) {
  return {
    type: BILL_LIST,
    bills: data.bookings
  }
}

export function searchFlight(query) {
  
  return (dispatch) => {
    return callApi("flight/search"+query).then(res => dispatch(updateSearchFlightList(res)));
  };

}


function updateSearchFlightList(data) {
  return {
    type: CREATE_FLIGHT,
    msg: "Search Results",
    flights: data.flights
  }
}


export function searchHotel(query) {
  
  return (dispatch) => {
    return callApi("hotel/search"+query).then(res => dispatch(updateSearchHotelList(res)));
  };

}


function updateSearchHotelList(data) {
  return {
    type: CREATE_HOTEL,
    msg: "Search Results",
    hotels: data.hotels
  }
}

export function searchCar(query) {
  
  return (dispatch) => {
    return callApi("car/search"+query).then(res => dispatch(updateSearchCarList(res)));
  };

}

function updateSearchCarList(data) {
  return {
    type: CREATE_CAR,
    msg: "Search Results",
    cars: data.cars
  }
}

export function deleteCar(data) {
   return (dispatch) => {
    return callApi("car/"+data, "delete").then(res => dispatch(getAllCars()));
  };
}


export function deleteHotel(data) {
   return (dispatch) => {
    return callApi("hotel/"+data, "delete").then(res => dispatch(getAllHotels()));
  };
}


export function deleteFlight(data) {
   return (dispatch) => {
    return callApi("flight/"+data, "delete").then(res => dispatch(getAllFlights()));
  };
}

export function updateFlight(data, id) {
  console.log("Data : ", data)
  return (dispatch) => {
    return callApi("flight/"+id, 'PATCH', data).then(res => dispatch(updateFlightResponse(res)));
  };

}

function updateFlightResponse(res) {
  console.log("response ", res)
  return (dispatch) => {
    return callApi('flight').then(res => dispatch(updateFlightList(res, "Flight Details Updated")));
  };
}

export function getAllUsers() {
  return (dispatch) => {
    return callApi('user').then(res => dispatch(updateUserList(res)));
  };
}

function updateUserList(data) {

 return {
    type: USER_LIST,
    users: data.users
  }

}

