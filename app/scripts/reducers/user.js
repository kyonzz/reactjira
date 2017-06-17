import { REHYDRATE } from "redux-persist/constants";
import { createReducer } from "utils/helpers";

import { ActionTypes } from "constants/index";

export const userState = {
  isLoggedIn: false
};

export default {
  user: createReducer(userState, {
    [ActionTypes.USER_LOGIN_SUCCESS](state) {
      return { ...state, isLoggedIn: true };
    },
    [ActionTypes.USER_LOGOUT_SUCCESS](state) {
      return { ...state, isLoggedIn: false };
    }
  })
};
