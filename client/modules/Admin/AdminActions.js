import * as API from './api/AdminApi';
import callApi from './../../util/apiCaller';

// Export Constants
export const CREATE_FLIGHT = 'CREATE_FLIGHT';
export const ADMIN_SIGNIN = 'ADMIN_SIGNIN';
export const ADMIN_SIGNOUT = 'ADMIN_SIGNOUT';

// Export Actions
export function createFlight(data) {

  return (dispatch) => {
    return callApi('/flight', 'post', data).then(res => dispatch(createFlightResponse(res)));
  };

}

function createFlightResponse() {
  return {
    type: CREATE_FLIGHT,
    msg: "New Flight Created"
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
	console.log("ss ", responseData)
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
