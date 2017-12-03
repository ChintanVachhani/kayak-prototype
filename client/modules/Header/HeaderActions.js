// Export Constants
export const UPDATE_FORMTYPEHEADER = 'UPDATE_FORMTYPEHEADER';
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

export function signInSuccess(data) {

  console.log("in actions handle card");
 
}


export function signUpvalidation(signUpData) {

  return dispatch => {
    
    return callApi('header', 'post', {
        post: {
        data: signUpData
      	},
    })
    .then(response => {
      if (response.status === 201) { 
         //localStorage.setItem('token', response.token);
         console.log("success signup");
       }
    })
  }
}
/*
*   {
*    "email" : email, 
*    "password" : password
*   }
*/
export const signInvalidation = (payload) =>
  fetch(`${api}/user/signin`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  }).then((response) => response.json())

  .then((responseJson) => {

    dispatch(signInSuccess(responseJson));
  })
  .catch(error => {
    console.log("Create Flight Falied with error : " + error);
    return error;
  });


