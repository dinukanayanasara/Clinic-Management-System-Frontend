//create reducer for user
import {
  DECREASE_COUNT,
  INCRESE_COUNT,
  SET_USER_INFO,
} from "../Actions/ActionTypes";

const initialState = {
  count: 0,
  user_data: {
            _id: "",
            role: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: '',
            dob: ''
  },

  user_token: ''
  



};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCRESE_COUNT:
      console.log("[USER_REDUCER]_increaseCount", action);
      return {
        count: state.count + 1,
      };
    case DECREASE_COUNT:
      console.log("[USER_REDUCER]_decreaseCount", action);
      return {
        count: state.count - 1,
      };
    case SET_USER_INFO:
      console.log("[USER_REDUCER]_setUserInfo", action.res);
      return {
        ...state,
        user_data: {
          ...state.user_data,
          _id: action.res.user._id,
          role: action.res.user.role,
          firstName: action.res.user.firstName,
          lastName: action.res.user.lastName,
          email: action.res.user.email,
          phoneNumber: action.res.user.phoneNumber,
          dob: action.res.user.dob

        },
        user_token: action.res.token
      };

    default:
      return state;
  }
};

export default UserReducer;
