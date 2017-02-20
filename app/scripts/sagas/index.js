import { fork } from 'redux-saga/effects';
import issue from './issue';
import user from './user';
/**
 * rootSaga
 */
export default function* root() {
  yield fork(issue);
  yield fork(user);
}
