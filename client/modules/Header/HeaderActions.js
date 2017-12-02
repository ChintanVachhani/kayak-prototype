// Export Constants
export const UPDATE_FORMTYPEHEADER = 'UPDATE_FORMTYPEHEADER';
import callApi from '../../util/apiCaller';
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