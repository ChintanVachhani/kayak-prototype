// Export Constants
export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';

// Export Actions
import callApi from '../../util/apiCaller';
import {Router, browserHistory, Route} from 'react-router';

export function handleBook(data) {
  console.log("in actions handle card");
  let req = {};
  let userEmail = data.email;
  req.cardNumber = data.cardNumber;
  req.cardName = data.cardName;
  req.exp_year = data.exp_year;
  req.secureCode = data.secureCode;
  return (dispatch) => {
    return callApi('billing', 'put', data).then(res => dispatch(bookingSuccess(res)));
  };
}

export function bookingSuccess(data) {
  console.log("this is changeform display" );
  browserHistory.push('/');   
  return {
   type : BOOKING_SUCCESS,
   data                             // this is same as newItem : newItem in ES6
  }        
}