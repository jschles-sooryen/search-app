import { put } from 'redux-saga/effects';
import * as postActions from '../actions/postActions';
import * as loadingActions from '../actions/loadingActions';

export function* fetchPostsSaga() {
  yield put(loadingActions.loading());
  try {
    const response = yield fetch('http://jsonplaceholder.typicode.com/posts');
    const data = yield response.json();
    yield put(loadingActions.loading());
    yield put(postActions.fetchPostsSuccess(data));
  } catch (e) {
    yield put(loadingActions.loading());
    yield put(postActions.fetchPostsFail());
  }
}