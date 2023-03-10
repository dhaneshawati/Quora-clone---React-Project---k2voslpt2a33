import { NEWLOGIN, LOGOUT } from "../actions/actionType";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWLOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
export default userReducer;
