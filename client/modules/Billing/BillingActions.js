// Export Constants
export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';

// Export Actions
import callApi from '../../util/apiCaller';
import {Router, browserHistory, Route} from 'react-router';

export function handleBook(data) {
  console.log("in actions handle card");
  let req = {
    userID: '',
    serviceType: data.serviceType,
    bookingDetail: {
      serviceId: data.bookingDetail.serviceId,
      city: data.bookingDetail.toPlace,
      price: data.bookingDetail.price,
      dateFrom: data.bookingDetail.dateFrom,
      dateTo: data.bookingDetail.dateTo
    },
    cardNumber: data.booking.card_Number,
    billingZipcode: data.billingDetails.add_PostalCode,
  };
  let userEmail = data.email;
  return (dispatch) => {
    return callApi('billing', 'put', req).then(res => dispatch(bookingSuccess(res)));
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