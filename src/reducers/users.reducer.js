import { FETCH_USERS } from '../actions/users.action';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...action.payload]; // ...state was removed
    // gon't need to get the state
    default:
      return state;
  }
};
