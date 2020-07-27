import { runSaga } from 'redux-saga';
import { fetchPostsSaga } from '../../store/sagas/posts';
import fetchPostsMockData from '../../config/mocks/fetchPostsMockData';
import { LOADING, FETCH_POSTS_SUCCESS } from '../../store/actions/actionTypes';

describe('fetchDataSaga', () => {
  it('Should call API and dispatch FETCH_POSTS_SUCCESS action with response data as payload', async () => {
    const dispatched = [];

    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, fetchPostsSaga);

    expect(dispatched).toEqual(
      [{ type: LOADING }], 
      [{ type: FETCH_POSTS_SUCCESS, payload: JSON.parse(fetchPostsMockData)}], 
      [{ type: LOADING }],
    );
  });
});