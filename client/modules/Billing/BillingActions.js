// Export Constants

// Export Actions
import callApi from '../../util/apiCaller';

export function handleBook(data) {
  console.log("in actions handle card");
  let req = {};
  let userEmail = data.email;
  req.cardNumber = data.cardNumber;
  req.cardName = data.cardName;
  req.exp_year = data.exp_year;
  req.secureCode = data.secureCode;
  return (dispatch) => {
    return callApi('billing', 'put', req).then(res => dispatch(editCardSuccess(res)));
  };
 
}