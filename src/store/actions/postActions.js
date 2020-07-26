import { 
  FETCH_POSTS_INIT, 
  FETCH_POSTS_SUCCESS, 
  FETCH_POSTS_FAIL,
  UPDATE_POST,
} from './actionTypes';

export const fetchPosts = () => {
  return { type: FETCH_POSTS_INIT };
};

export const fetchPostsSuccess = (payload) => {
  return { type: FETCH_POSTS_SUCCESS, payload };
};

export const fetchPostsFail = () => {
  return { type: FETCH_POSTS_FAIL };
};

export const updatePost = (post) => {
  return { type: UPDATE_POST, payload: post };
};