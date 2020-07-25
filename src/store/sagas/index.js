import { all, takeEvery } from 'redux-saga/effects';
import { fetchPostsSaga } from './posts';

import { FETCH_POSTS_INIT } from '../actions/actionTypes';

export default function* rootSaga() {
  yield all([watchPosts()]);
};

function* watchPosts() {
  yield takeEvery(FETCH_POSTS_INIT, fetchPostsSaga);
};