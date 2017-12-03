// Export Constants
export const UPDATE_FORMTYPEHEADER = 'UPDATE_FORMTYPEHEADER';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_CARD_SUCCESS = 'EDIT_CARD_SUCCESS';
export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';

import callApi from '../../util/apiCaller';
import {Router, browserHistory, Route} from 'react-router';

const api = 'http://localhost:8000/api'

const headers = {
  'Accept': 'application/json'
};
// Export Actions
export function changeFormDisplay(displayForm) {
  console.log("this is changeform display" );    
  return {
   type : UPDATE_FORMTYPEHEADER,
   displayForm                                // this is same as newItem : newItem in ES6
  }        
}


export function changeType(name) {
  return dispatch => {
    dispatch(changeFormDisplay(name));
   }
}

export function accountPage() {
  browserHistory.push('/account');
}

export function deleteProfileSuccess(data) {
 browserHistory.push('/');
}

export function editProfileSuccess(data) {
  console.log("this is in handle");
  return {
  type : EDIT_PROFILE_SUCCESS,
  data
  }
}

export function uploadImageSuccess(data) {
  console.log("this is in handle uploadImageSuccess");
  return {
    type : UPLOAD_IMAGE_SUCCESS,
    data
  }
}

export function deleteAccount() {
  let userEmail = localStorage.getItem('email');
  let req = {};
  return (dispatch) => {
    return callApi('user/userEmail', 'delete', req).then(res => dispatch(deleteProfileSuccess(res)));
  };
}

export function getUserDetails() {
  console.log("in getUserDetails actions");
  let userEmail = localStorage.getItem('email');
  let req = {};
  return (dispatch) => {
    return callApi('user/userEmail', 'get', req).then(res => dispatch(getUserSuccess(res)));
  };
}

export function handleEditProfile(data) {
  console.log("in handleEditprofile actions");
  let req = {
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode,
        email : data.email,
        phoneNumber: data.phoneNumber
    };
  let userEmail = localStorage.getItem('email');
  return (dispatch) => {
    return callApi('user/userEmail', 'patch', req).then(res => dispatch(editProfileSuccess(res)));
  };
}

export function handleImageEdit(imageFormData) {
  console.log("in handleImageEdit actions");
  let userEmail = localStorage.getItem('email');
  return (dispatch) => {
    return callApi('user/userEmail', 'post', imageFormData, "upload").then(res => dispatch(uploadImageSuccess(res)));
  };
}

export function getUserSuccess(data) {
  console.log("this is in getUserSuccess");
  return {
  type : GET_USER_DETAILS,
    data
  }
}

export function signinSuccess(data) {
  console.log("this is in signinsuccess");
  localStorage.setItem('token', data.token);
  localStorage.setItem('email', data.id);
  let email1 = data.id;
  console.log("this is emain in signin success" + emai11);
  return {
  type : SIGNIN_SUCCESS,
  email1
  }
}

export function signupSuccess(data) {
  console.log("this is in signupSuccess");
  console.log(data);
  console.log(data.token);
  localStorage.setItem('token', data.token);
  localStorage.setItem('email', data.id);
  let email = data.id;
  return {
  type : SIGNUP_SUCCESS,
  email
  }
}

export function editCardSuccess(data) {
  console.log("this is in editCardSuccess");
  
  return {
  type : EDIT_CARD_SUCCESS,
  data
  }
}

export function handleEditCard(data) {
  console.log("in actions handle card");
  let req = {};
  userEmail = localStorage.getItem('email');
  req.cardNumber = data.cardNumber;
  req.cardName = data.cardName;
  req.exp_year = data.exp_year;
  req.secureCode = data.secureCode;
  req.exp_month= data.exp_month
  return (dispatch) => {
    return callApi('user/addCard', 'post', req).then(res => dispatch(editCardSuccess(res)));
  };
 
}

export function signUpvalidation(data) {
  let req = {};
  console.log("this is in action signup"+ data.email);
  req.email = data.email;
  req.password = data.password;
  req.firstName = data.firstName;
  req.lastName = data.lastName;
  return (dispatch) => {
    return callApi('user/signup', 'post', req).then(res => dispatch(signupSuccess(res)));
  };
}

export function signInvalidation(data) {
  let req = {};
  console.log("this is in action signin"+ data.email);
  req.email = data.email;
  req.password = data.password;
  return (dispatch) => {
    return callApi('user/signin', 'post', req).then(res => dispatch(signinSuccess(res)));
  };
}

export function signOut() {
  console.log("this is in action signOut");
  localStorage.clear();
  console.log("local storage after clear" + JSON.stringify(localStorage));
  browserHistory.push('/');
}
/*
*   {
*    "email" : email, 
*    "password" : password
*   }
*/



