// Export Constants
export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';

// Export Actions
import callApi from '../../util/apiCaller';
import {Router, browserHistory, Route} from 'react-router';

export function handleBook(data) {
  console.log("in actions handle card booking");
  //let userEmail = localStorage.getItem('email');
  let req = {
    userID: data.customers.email,
    serviceType: data.serviceType,
    serviceName: data.bookingDetail.serviceName,
    serviceId: data.bookingDetail.serviceId,
      city: data.bookingDetail.toPlace,
      price: data.bookingDetail.price,
      dateFrom: data.bookingDetail.dateFrom,
      dateTo: data.bookingDetail.dateTo,
    cardNumber: data.card.card_Number,
    billingZipcode: data.billingDetails.add_PostalCode,
  };
  let userEmail = data.email;
  return (dispatch) => {
    return callApi('booking', 'put', req).then(res => dispatch(bookingSuccess(res)));
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
