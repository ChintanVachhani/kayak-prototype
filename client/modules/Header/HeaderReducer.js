// Import Actions
import { SIGNUP_SUCCESS, SIGNIN_SUCCESS, EDIT_PROFILE_SUCCESS, EDIT_CARD_SUCCESS, GET_USER_DETAILS, UPLOAD_IMAGE_SUCCESS } from './HeaderActions';

// Initial State

const initialState = {
	userdetails: {
        firstName: '',
        lastName : '',
        email: '',
        phoneNumber: '',
        address : '',
        city : '',
        state: '',
        zipcode: '',
        profileImage: ''
    },
    card: {
      secureCode: '',
      cardName : '',
      exp_year: '',
      cardNumber: '',
      exp_month:''
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
      case UPLOAD_IMAGE_SUCCESS :
       user = state.userdetails;
       user.profileImage = action.data.file;
        return {
            ...state,
            userdetails : user
        };
      case GET_USER_DETAILS : 
        console.log("in get user success reducer");
        user = state.userdetails;
        user.firstName = action.data.firstName;
        user.lastName = action.data.lastName;
        user.phoneNumber = action.data.phoneNumber;
        user.address = action.data.address;
        user.city = action.data.city;
        user.state = action.data.state;
        user.zipcode = action.data.zipcode;
        user.profileImage = action.data.profileImage;
        return {
           ...state,
           userdetails : user
       };
      case EDIT_PROFILE_SUCCESS :
        console.log("in edit profile success reducer");
        user = state.userdetails;
        user.firstName = action.data.firstName;
        user.lastName = action.data.lastName;
        user.phoneNumber = action.data.phoneNumber;
        user.address = action.data.address;
        user.city = action.data.city;
        user.state = action.data.state;
        user.zipcode = action.data.zipcode;
        user.profileImage = action.data.profileImage;
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
        carddet.exp_month = action.data.exp_month;
         return {
               ...state,
               card : carddet
           };
    default:
      return state;
  }
};

export default HeaderReducer;
