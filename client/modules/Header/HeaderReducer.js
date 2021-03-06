// Import Actions
import { SIGNUP_SUCCESS, SIGNIN_SUCCESS,SIGNOUT_SUCCESS, EDIT_PROFILE_SUCCESS, EDIT_CARD_SUCCESS, GET_USER_DETAILS, UPLOAD_IMAGE_SUCCESS, GET_ACCOUNT_DETAILS } from './HeaderActions';

// Initial State

const initialState = {
  message : '',
  isAuthenticated:false,
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



      case SIGNOUT_SUCCESS :
            return {
               ...state,
               isAuthenticated:false
           };

      
      case UPLOAD_IMAGE_SUCCESS :
       user = state.userdetails;
       user.profileImage = action.data.file;
        return {
            ...state,
            userdetails : user
        };
      case SIGNIN_SUCCESS :
      case SIGNUP_SUCCESS :
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
        user.email = action.data.user.email;
        //user.profileImage = action.data.profileImage;
        console.log(JSON.stringify(user));
        return {
           ...state,
           userdetails : user,
           isAuthenticated: true
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
