import keyMirror from 'fbjs/lib/keyMirror';

export const ActionTypes = keyMirror({
  ON_DRAG: undefined,
  END_DRAG: undefined,
  SELECT_ISSUE: undefined,
  SELECT_PARENT_ISSUE: undefined,
  FETCH_ISSUE_REQUEST: undefined,
  FETCH_ISSUE_SUCCESS: undefined,
  FETCH_ISSUE_FAILURE: undefined,
  FETCH_SINGLE_ISSUE_REQUEST: undefined,
  FETCH_SINGLE_ISSUE_SUCCESS: undefined,
  FETCH_SINGLE_ISSUE_FAILURE: undefined,
  CHANGE_ISSUE_STATUS: undefined,
  USER_LOGIN_REQUEST: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT_REQUEST: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  SET_REDIRECT_URL: undefined,
  SHOW_ALERT: undefined,
  HIDE_ALERT: undefined,
  DELETE_ISSUE: undefined
});

/**
 * @constant {Object} XHR
 * @memberof Constants
 */
export const XHR = keyMirror({
  SUCCESS: undefined,
  FAIL: undefined
});
