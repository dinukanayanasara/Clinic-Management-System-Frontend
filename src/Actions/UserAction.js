import {
  DECREASE_COUNT,
  INCRESE_COUNT,
  SET_USER_INFO,
} from "../Actions/ActionTypes";

export function increaseCount() {
  console.log("[USER_ACTIONS]_increaseCount");
  return {
    type: INCRESE_COUNT,
  };
}

export function decreaseCount() {
  console.log("[USER_ACTIONS]_increaseCount");
  return {
    type: DECREASE_COUNT,
  };
}

export function setUserInfo(user_info) {
  console.log("[USER_ACTIONS]_setUserInfo", user_info);
  return {
    type: SET_USER_INFO,
    res: user_info,
  };
}
