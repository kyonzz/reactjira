import { takeEvery, takeLatest, delay } from 'redux-saga';
import { fork, take, call, put, cancel, select } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';
import { create } from 'apisauce';
import { push } from 'react-router-redux';

const api = create({
  baseURL: 'http://localhost:1337',
  headers: { Accept: 'application/vnd.github.v3+json' }
});

export function* fetchIssues() {
  yield call(delay, 1000);
  const response = yield call(api.get, '/issues');
  yield call(console.log, response);
  if (response.ok) {
    yield put({ type: 'FETCH_ISSUE_SUCCESS', payload: response.data });
  } else {
    yield put({ type: 'FETCH_ISSUE_FAILURE' });
  }
}

export function* fetchSingleIssue(action) {
  yield call(delay, 1000);
  const response = yield call(api.get, '/issues/' + action.payload);
  yield call(console.log, response);
  if (response.ok) {
    yield put({ type: 'FETCH_SINGLE_ISSUE_SUCCESS', payload: response.data });
  } else {
    yield put({ type: 'FETCH_SINGLE_ISSUE_FAILURE' });
  }
}

export function* changeStatus(action) {
  try {
    const response = yield call(api.put, `/issues/${action.id}`, {
      status: `${action.status}`
    });
    if (response.ok) {
      yield call(console.log, 'change thanh con');
    }
  } catch (e) {
    yield call(console.log, 'Change status have an error');
  }
  const changestatus = (id, tostatus) => {
    api
      .put(`/issues/${id}`, { status: `${tostatus}` })
      .then(rs => console.log(rs));
  };
}

export function* deleteStatus(action) {
  const response = yield call(api.delete, '/issues/' + action.payload);
  if (response.ok) {
    yield call(alert, 'Xoa thanh cong');
    yield put(push('/dashboard'));
  } else {
    yield call(alert, 'Xoa that bai');
  }
}

export default function* app() {
  yield [
    takeEvery(ActionTypes.FETCH_SINGLE_ISSUE_REQUEST, fetchSingleIssue),
    takeLatest(ActionTypes.FETCH_ISSUE_REQUEST, fetchIssues),
    takeEvery(ActionTypes.CHANGE_ISSUE_STATUS, changeStatus),
    takeLatest(ActionTypes.DELETE_ISSUE, deleteStatus)
  ];
}
