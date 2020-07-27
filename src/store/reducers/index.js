import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import loadingReducer from './loadingReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  loading: loadingReducer,
  search: searchReducer,
});

export default rootReducer;