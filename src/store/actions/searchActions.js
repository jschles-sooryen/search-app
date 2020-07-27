import { SEARCH } from './actionTypes';

export const search = (query) => {
  return { type: SEARCH, payload: query };
};