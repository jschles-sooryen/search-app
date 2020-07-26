import { LOADING } from '../actions/actionTypes';

const initialState = false;

function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return !state;
    default:
      return state;
  }
}

export default loadingReducer;