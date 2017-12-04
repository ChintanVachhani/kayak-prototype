// Import Actions
import { SIGNUP_SUCCESS, SIGNIN_SUCCESS, EDIT_PROFILE_SUCCESS, EDIT_CARD_SUCCESS, GET_USER_DETAILS, UPLOAD_IMAGE_SUCCESS, GET_ACCOUNT_DETAILS } from './HeaderActions';

// Initial State

const initialState = {
  message : '',
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
  let user;
  switch (action.type) {

      case SIGNUP_SUCCESS :
        console.log("in signup success reducer");
        user = state.userdetails;
        user.email = action.email;
            return {
               ...state,
               userdetails : user
           };

      case SIGNIN_SUCCESS :
        console.log("in signin success reducer");
        console.log(action.email);
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
      case EDIT_PROFILE_SUCCESS : 
        console.log("in get user success reducer");
        user = state.userdetails;
        user.firstName = action.data.user.firstName;
        user.lastName = action.data.user.lastName;
        user.phoneNumber = action.data.user.phoneNumber;
        user.address = action.data.user.address;
        user.city = action.data.user.city;
        user.state = action.data.user.state;
        user.zipcode = action.data.user.zipcode;
        //user.profileImage = action.data.profileImage;
        console.log(JSON.stringify(user));
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
