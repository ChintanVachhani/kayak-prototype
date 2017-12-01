// Import Actions
import {UPDATE_USERDETAILS} from './HeaderActions';

// Initial State
const initialState = {
	userdetails: {
        firstName: '',
        lastName : '',
        email: '',
        phone: '',
        address : '',
        hobbies : ''
    }
};

const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {
  	case UPDATE_USERDETAILS :
        console.log("in update userdetails form reducer case");
        
        temp = this.state.userdetails;
        temp.firstName = action.userDetails.firstName;
        temp.lastName = action.carDetails.lastName;
        temp.email = action.carDetails.email;
        temp.phone = action.carDetails.phone;
        temp.address = action.carDetails.address;
        temp.hobbies = action.carDetails.hobbies;
        
           return {
               ...state,
               
               userdetails : temp
           };
    
    default:
      return state;
  }
};

export default HeaderReducer;
