import { SEARCH } from '../actions/actionTypes';

const initialState = '';

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
}

export default searchReducer;