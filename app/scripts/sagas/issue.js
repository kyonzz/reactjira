import { takeEvery, delay } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';
import { create } from 'apisauce'

const api = create({
  baseURL: 'http://localhost:1337',
  headers: { 'Accept': 'application/vnd.github.v3+json' }
})

export function* fetchIssues() {
  yield call(delay, 1000);
  const response = yield call(api.get, '/issues')
  if (response.ok) {
    yield put({ type: 'FETCH_ISSUE_SUCCESS', payload: response.data })
  } else {
    yield put({ type: 'FETCH_ISSUE_FAILURE' })
  }
}

function* watchFetchIssues() {
  yield* takeEvery(ActionTypes.FETCH_ISSUE_REQUEST, fetchIssues);
}

export default function* app() {
  yield fork(watchFetchIssues);
}
