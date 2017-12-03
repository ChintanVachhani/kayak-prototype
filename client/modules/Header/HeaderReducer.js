// Import Actions
import { SIGNUP_SUCCESS, SIGNIN_SUCCESS } from './HeaderActions';

// Initial State

const initialState = {
	userdetails: {
        firstName: '',
        lastName : '',
        email: '',
        phone: '',
        address : '',
        hobbies : '',
        creditCard: '',
        picture: ''
    }
};

const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {

      case SIGNUP_SUCCESS :
        console.log("in signup success");
        let user = state.userdetails;
        user.email = action.email;
        console.log("this is tmep");
           return {
               ...state,
               userdetails : user
           };

      case SIGNIN_SUCCESS :
        console.log("in signup success");
        user = state.userdetails;
        user.email = action.email;
        console.log("this is tmep");
           return {
               ...state,
               userdetails : user
           };
    default:
      return state;
  }
};

export default HeaderReducer;
