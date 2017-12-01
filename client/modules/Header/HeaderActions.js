// Export Constants

// Export Actions

export const UPDATE_FORMTYPEHOME = 'UPDATE_FORMTYPEHOME';
export const UPDATE_USERDETAILS = 'UPDATE_USERDETAILS';
import history from '../../history';
import callApi from '../../util/apiCaller';

export function changeFormDisplay(displayForm) {
  console.log("this is changeform display" );    
  return {
   type : UPDATE_FORMTYPEHOME,
   displayForm                                // this is same as newItem : newItem in ES6
  }        
}



export function changeFormType(formType) {
  console.log("this is in changeformtype first dispatch");
  return dispatch => {
    dispatch(changeFormDisplay(formType));
  
   }
}


export function editUserDetails(userDetails) {
  console.log("this is edituserdetials action" );    
  return {
   type : UPDATE_USERDETAILS,
   userDetails                                // this is same as newItem : newItem in ES6
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


export function accountPage() {

  return dispatch => {
    
    
  }
}
/*
*   {
*    "email" : email, 
*    "password" : password,
*    "fName" : firstName,
*    "lName" : lastName
*   }
*/
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
         console.log("success signin");
                 
      }
    })
  }
}



export function deleteAccount(token) {
    return dispatch => {
    
    return callApi('Header', 'post', {
        post: {
        data: token,
        
      },
    })
      .then(response => response.status)
      .then(status => {
            if (status === 201) { 
              
                console.log("account deleted");
                 
            }
        })
  }
}

export function handleEditProfile(userdata) {
  return dispatch => {
    
    return callApi('header', 'post', {
        post: {
        data: userdata
        
      },
    })
    .then(response => {
      if (response.status === 201) { 
         //localStorage.setItem('token', response.token);
         dispatch(editUserDetails(userdata));
         console.log("success signin");
                 
      }
    })
  }
}


