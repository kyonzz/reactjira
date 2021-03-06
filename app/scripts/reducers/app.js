import { REHYDRATE } from "redux-persist/constants";
import { createReducer } from "utils/helpers";

import { ActionTypes } from "constants/index";

export const appState = {
  notifications: {
    visible: false,
    message: "",
    status: "",
    withTimeout: true
  },
  redirectUrl: "/dashboard"
};

export default {
  app: createReducer(appState, {
    [ActionTypes.SHOW_ALERT](state, action) {
      const notifications = {
        ...state.notifications,
        visible: true,
        message: action.message,
        status: action.status,
        withTimeout: action.withTimeout === true
      };

      return { ...state, notifications };
    },
    [ActionTypes.SET_REDIRECT_URL](state, action) {
      return { ...state, redirectUrl: action.payload };
    },
    [ActionTypes.HIDE_ALERT](state) {
      const notifications = {
        ...state.notifications,
        visible: false,
        withTimeout: true
      };

      return { ...state, notifications };
    }
  })
};
