// Import Actions
import { CREATE_FLIGHT } from './AdminActions';

// Initial State
const initialState = {  };

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_FLIGHT:
      return {
        ...state,
        "msg": action.msg

      };

    default:
      return state;
  }
};

export default AdminReducer;
