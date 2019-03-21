import { FETCH_POSTS } from '../actions/posts.action';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...action.payload]; // ...state !!!

    default:
      return state;
  }
};
