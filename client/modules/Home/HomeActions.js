// Export Constants

// Export Actions
export const UPDATE_CARFORM = 'UPDATE_CARFORM';
export const UPDATE_FLIGHTFORM = 'UPDATE_FLIGHTFORM';
export const UPDATE_HOTELFORM = 'UPDATE_HOTELFORM';
export const UPDATE_FORMTYPE = 'UPDATE_FORMTYPE';

import callApi from '../../util/apiCaller';


export function carFormUpdate(carDetails) {
	console.log("this is carFormUpdate" + JSON.stringify(carDetails));
                    
                    return {
                     type : UPDATE_CARFORM,
                     carDetails                                // this is same as newItem : newItem in ES6
                    }                  
                
}

export function flightFormUpdate(flightDetails) {
	console.log("this is carFormUpdate" + JSON.stringify(carDetails));
                    
                    return {
                     type : UPDATE_FLIGHTFORM,
                     flightDetails                                // this is same as newItem : newItem in ES6
                    }                  
                
}

export function hotelFormUpdate(hotelDetails) {
	console.log("this is carFormUpdate" + JSON.stringify(carDetails));
                    
                    return {
                     type : UPDATE_HOTELFORM,
                     hotelDetails                                // this is same as newItem : newItem in ES6
                    }                  
                
}

export function changeFormDisplay(displayForm) {
  console.log("this is changeform display" );    
  return {
   type : UPDATE_FORMTYPE,
   displayForm                                // this is same as newItem : newItem in ES6
  }        
}

export function handleCar(carDetails) {
    return dispatch => {
    
    	dispatch(carFormUpdate(carDetails));
        history.push('/Car');
      
     }
}

export function handleFlight(flightDetails) {
    return dispatch => {
    
    	dispatch(flightFormUpdate(flightDetails));
        history.push('/flight');
      
     }
}

export function handleHotel(hotelDetails) {
    return dispatch => {
    
    	dispatch(hotelFormUpdate(hotelDetails));
        history.push('/Hotel');
      
     }
}


export function changeForm(formType) {
  console.log("this is in changeformtype first dispatch");
  return dispatch => {
    dispatch(changeFormDisplay(formType));
  
   }
}
