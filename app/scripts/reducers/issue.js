import { createReducer } from "utils/helpers";

import { ActionTypes } from "constants/index";

export const issueState = {
  issues: [],
  isLoading: false,
  isLoadingSuccess: true,
  onChangeGroupId: null,
  issue: {}
};

export default {
  issue: createReducer(issueState, {
    [ActionTypes.FETCH_ISSUE_REQUEST](state) {
      return { ...state, isLoading: true };
    },
    [ActionTypes.FETCH_ISSUE_SUCCESS](state, action) {
      return { ...state, issues: action.payload, isLoading: false };
    },
    [ActionTypes.FETCH_ISSUE_FAILURE](state) {
      return { ...state, isLoading: false, isLoadingSuccess: false };
    },
    [ActionTypes.FETCH_SINGLE_ISSUE_REQUEST](state) {
      return { ...state, isLoading: true };
    },
    [ActionTypes.FETCH_SINGLE_ISSUE_SUCCESS](state, action) {
      return { ...state, issue: action.payload, isLoading: false };
    },
    [ActionTypes.FETCH_SINGLE_ISSUE_FAILURE](state) {
      return { ...state, isLoading: false, isLoadingSuccess: false };
    },
    [ActionTypes.SELECT_ISSUE](state, action) {
      return {
        ...state,
        selectedIssue: action.payload,
        selectedParentIssue: null
      };
    },
    [ActionTypes.SELECT_PARENT_ISSUE](state, action) {
      return {
        ...state,
        selectedParentIssue: action.payload,
        selectedIssue: null
      };
    },
    [ActionTypes.ON_DRAG](state, action) {
      return { ...state, onChangeGroupId: action.payload };
    },
    [ActionTypes.END_DRAG](state) {
      return { ...state, onChangeGroupId: null };
    }
  })
};
