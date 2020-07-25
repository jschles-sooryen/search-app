import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  loading: loadingReducer,
});

export default rootReducer;