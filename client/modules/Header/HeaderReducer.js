// Import Actions
import {  } from './HeaderActions';

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
    default:
      return state;
  }
};

export default HeaderReducer;
