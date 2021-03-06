import { ActionTypes } from 'constants/index';

export function requestIssues() {
  return {
    type: ActionTypes.FETCH_ISSUE_REQUEST
  };
}

export function requestSingleIssue(id) {
  return {
    type: ActionTypes.FETCH_SINGLE_ISSUE_REQUEST,
    payload: id
  };
}

export function changeIssueStatus(id, status) {
  return {
    type: ActionTypes.CHANGE_ISSUE_STATUS,
    id,
    status
  };
}

export function selectIssue(item) {
  return {
    type: ActionTypes.SELECT_ISSUE,
    payload: item
  };
}

export function selectParentIssue(item) {
  return {
    type: ActionTypes.SELECT_PARENT_ISSUE,
    payload: item
  };
}

export function selectGroupId(id) {
  return {
    type: ActionTypes.ON_DRAG,
    payload: id
  };
}

export function unselectGroupId() {
  return {
    type: ActionTypes.END_DRAG
  };
}
