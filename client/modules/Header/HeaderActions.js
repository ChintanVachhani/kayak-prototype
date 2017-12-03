// Export Constants
export const UPDATE_FORMTYPEHEADER = 'UPDATE_FORMTYPEHEADER';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';

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

export function deleteAccount() {
  
 browserHistory.push('/');
}

export function handleEditProfile(userDetails) {
  console.log("in handleEditprofile actions");
 
}

export function handleCard(cardDetails) {

  console.log("in actions handle card");
 
}

export function signinSuccess(data) {
  console.log("this is in signinsuccess");
  localStorage.setItem('token', data.token);
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

  let email = data.id;
  return {
  type : SIGNUP_SUCCESS,
  email
  }
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
/*
*   {
*    "email" : email, 
*    "password" : password
*   }
*/



