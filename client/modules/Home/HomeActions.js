// Export Constants

// Export Actions
export const UPDATE_CARFORM = 'UPDATE_CARFORM';
export const UPDATE_FLIGHTFORM = 'UPDATE_FLIGHTFORM';
export const UPDATE_HOTELFORM = 'UPDATE_HOTELFORM';
export const UPDATE_FORMTYPE = 'UPDATE_FORMTYPE';
export const UPDATE_CITIES = 'UPDATE_CITIES';


import callApi from '../../util/apiCaller';
//import {push} from 'react-router-redux';
import {Router, browserHistory, Route} from 'react-router';


export function citiesUpdate(data) {
    return {
     type : UPDATE_CITIES,
     cities:data.cities                                // this is same as newItem : newItem in ES6
    }                               
}

export function carFormUpdate(carDetails) {
	console.log("this is carFormUpdate" + JSON.stringify(carDetails));
                    
                    return {
                     type : UPDATE_CARFORM,
                     carDetails                                // this is same as newItem : newItem in ES6
                    }                  
                
}

export function changeFormDisplay(displayForm) {
  console.log("this is changeform display" );    
  return {
   type : UPDATE_FORMTYPE,
   displayForm                                // this is same as newItem : newItem in ES6
  }        
}

export function flightFormUpdate(flightDetails) {
	console.log("this is carFormUpdate" + JSON.stringify(flightDetails));
                    
                    return {
                     type : UPDATE_FLIGHTFORM,
                     flightDetails                                // this is same as newItem : newItem in ES6
                    }                  
                
}

export function hotelFormUpdate(hotelDetails) {
	console.log("this is carFormUpdate" + JSON.stringify(hotelDetails));
                    
                    return {
                     type : UPDATE_HOTELFORM,
                     hotelDetails                                // this is same as newItem : newItem in ES6
                    }                  
                
}


export function handleCar(carDetails) {
    return dispatch => {
    
    	dispatch(carFormUpdate(carDetails));
        browserHistory.push('/car');
      
     }
}

export function handleFlight(flightDetails) {
    return dispatch => {
    
    	dispatch(flightFormUpdate(flightDetails));
        browserHistory.push('/flight');
      
     }
}

export function handleHotel(hotelDetails) {
    return dispatch => {
    
    	dispatch(hotelFormUpdate(hotelDetails));
        browserHistory.push('/hotel');
      
     }
}

export function changeForm(formType) {
  console.log("this is in changeformtype first dispatch");
  return dispatch => {
    dispatch(changeFormDisplay(formType));
  
   }
}
export function populateCities(){
return (dispatch) => {
return callApi('util/location', 'get').then(res => dispatch(citiesUpdate(res)));
  };
}

export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

export function parseJSON(response) {
     return response.json()
}