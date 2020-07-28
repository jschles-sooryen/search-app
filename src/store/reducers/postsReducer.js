import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL, UPDATE_POST } from '../actions/actionTypes';

const initialState = [];

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.payload;
    case FETCH_POSTS_FAIL:
      return { error: true };
    case UPDATE_POST:
      const { id, title } = action.payload;
      return state.map((post) => {
        if (id === post.id) {
          return { ...post, title };
        }
        return post;
      });
    default:
      return state;
  }
}

export default postsReducer;