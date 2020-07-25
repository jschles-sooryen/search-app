import { FETCH_POSTS_INIT, FETCH_POSTS_SUCCESS } from './actionTypes';

export const fetchPosts = () => {
  return { type: FETCH_POSTS_INIT };
};

export const fetchPostsSuccess = (payload) => {
  return { type: FETCH_POSTS_SUCCESS, payload };
};