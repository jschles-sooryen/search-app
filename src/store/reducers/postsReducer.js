import { FETCH_POSTS_SUCCESS } from '../actions/actionTypes';

const initialState = [];

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default postsReducer;