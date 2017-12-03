// Import Actions
import { SIGNUP_SUCCESS, SIGNIN_SUCCESS, EDIT_PROFILE_SUCCESS, EDIT_CARD_SUCCESS } from './HeaderActions';

// Initial State

const initialState = {
	userdetails: {
        firstName: '',
        lastName : '',
        email: '',
        phone: '',
        address : '',
        hobbies : '',
        picture: ''
    },
    card: {
      secureCode: '',
      cardName : '',
      exp_year: '',
      cardNumber: ''
    }
};

const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {

      case SIGNUP_SUCCESS :
        console.log("in signup success reducer");
        let user = state.userdetails;
        user.email = action.email;
            return {
               ...state,
               userdetails : user
           };

      case SIGNIN_SUCCESS :
        console.log("in signin success reducer");
        user = state.userdetails;
        user.email = action.email;
           return {
               ...state,
               userdetails : user
           };

      case EDIT_PROFILE_SUCCESS :
        console.log("in edit profile success reducer");
        user = state.userdetails;
        user.firstName = action.data.firstName;
        user.lastName = action.data.lastName;
        user.phone = action.data.phone;
        user.address = action.data.address;
        user.hobbies = action.data.hobbies;
           return {
               ...state,
               userdetails : user
           };
           
      case EDIT_CARD_SUCCESS :
        console.log("in edit profile success reducer");
        let carddet = state.card;
        carddet.secureCode = action.data.secureCode;
        carddet.cardName = action.data.cardName;
        carddet.exp_year = action.data.exp_year;
        carddet.cardNumber = action.data.cardNumber;
         return {
               ...state,
               card : carddet
           };
    default:
      return state;
  }
};

export default HeaderReducer;
