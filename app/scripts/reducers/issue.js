import { REHYDRATE } from 'redux-persist/constants';
import { createReducer } from 'utils/helpers';

import { ActionTypes } from 'constants/index';

export const issueState = {
    issues: [],
    isLoading: false,
    onChangeGroupId: null
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
            return { ...state, isLoading: false };
        },
        [ActionTypes.SELECT_ISSUE](state, action) {
            return { ...state, selected: action.payload };
        },
        [ActionTypes.ON_DRAG](state, action) {
            return { ...state, onChangeGroupId: action.payload };
        },
        [ActionTypes.END_DRAG](state) {
            return { ...state, onChangeGroupId: null };
        }
    })
};
