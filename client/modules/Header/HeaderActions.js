// Export Constants
export const UPDATE_FORMTYPEHEADER = 'UPDATE_FORMTYPEHEADER';
import callApi from '../../util/apiCaller';
import {Router, browserHistory, Route} from 'react-router';
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
export function signInvalidation(signInData) {
	return dispatch => {    
    return callApi('header', 'post', {
        post: {
        data: signInData,
      	},
    })
    .then(response => {
      if (response.status === 201) { 
         //localStorage.setItem('token', response.token);
         console.log("success login");
      }
    })
  }
}