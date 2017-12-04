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
      browserHistory.push('/');
  return {
   type : UPDATE_FORMTYPEHEADER,
   displayForm                                // this is same as newItem : newItem in ES6
  }        
}

export function getUserSuccess(data) {
  console.log("this is in getUserSuccess");
  console.log(data);
  return {
  type : GET_USER_DETAILS,
    data
  }
}

export function changeType(name) {
  return dispatch => {
    dispatch(changeFormDisplay(name));
   }
}

export function accountPage() {
  console.log("in account page route in actions");

  browserHistory.push('/account');
}

export function deleteProfileSuccess(data) {
 browserHistory.push('/');
}

export function redirectToHome(data) {
 browserHistory.push('/');
}

export function editProfileSuccess(data) {
  console.log("this is in handle");
  console.log(data);
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
  //let userEmail = "sksk@gmail.com";
  let req = {};
  return (dispatch) => {
    return callApi(`user/${userEmail}`, 'delete', req).then(res => dispatch(deleteProfileSuccess(res)));
  };
}

export function getUserDetails() {
  console.log("in getUserDetails actions");
  let userEmail = localStorage.getItem('email');
  console.log("this is userEmail in getuserdetails" +userEmail );

  //let userEmail = "sksk@gmail.com";
  let req = {};
  return (dispatch) => {
    return callApi(`user/${userEmail}`, 'get', req).then(res => dispatch(getUserSuccess(res)));
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
        phoneNumber: data.phoneNumber
    };
  let userEmail = localStorage.getItem('email');
  console.log("this is userEMail  "+ userEmail );
  console.log(req);
  return (dispatch) => {
    return callApi(`user/${userEmail}`, 'PATCH', req).then(res => dispatch(getUserDetails()));
  };
}

export function handleImageEdit(imageFormData) {
  console.log("in handleImageEdit actions");
  let userEmail = localStorage.getItem('email');
  //let userEmail = "sksk@gmail.com";
  return (dispatch) => {
    return callApi(`user/${userEmail}`, 'post', imageFormData, "upload").then(res => dispatch(uploadImageSuccess(res)));
  };
}



export function signinSuccess(data) {
  console.log("this is in signinsuccess");
  localStorage.setItem('token', data.token);
  localStorage.setItem('email', data.id);
  console.log("this is printing" + data.id);
  let email = data.id;
  
  /*let email;
  if(data.id==null || data.id=='undefied')
    {console.log("in failed condition");
      email = "print@gmail.com"; }
  console.log("this is emain in signin success" + email);*/
  return {
  type : SIGNIN_SUCCESS,
  email
  }
}

export function signupSuccess(data) {
  console.log("this is in signupSuccess header actions");
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
  let userEmail = localStorage.getItem('email');
  //let userEmail = "sksk@gmail.com";
  req.email = userEmail;
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
  req.email = data.email;
  req.password = data.password;
  return (dispatch) => {
    return callApi('user/signin', 'post', req).then(res => dispatch(signinSuccess(res)));
  };
}

export function signOut() {
  //console.log("this is in action signOut");
  localStorage.clear();
  //console.log("local storage after clear" + JSON.stringify(localStorage));
  browserHistory.push('/');
}
/*
*   {
*    "email" : email, 
*    "password" : password
*   }
*/



