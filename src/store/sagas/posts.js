import { put } from 'redux-saga/effects';
import { fetchPostsSuccess, fetchPostsFail } from '../actions/postActions';
import { loading } from '../actions/loadingActions';

export function* fetchPostsSaga() {
  yield put(loading());
  try {
    const response = yield fetch('http://jsonplaceholder.typicode.com/posts');
    const data = yield response.json();
    yield put(loading());
    yield put(fetchPostsSuccess(data));
  } catch (e) {
    yield put(loading());
    yield put(fetchPostsFail());
  }
}