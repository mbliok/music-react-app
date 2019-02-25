import { USER_LOGGED_IN } from '../types';
// the reducer is just a funck that takes state and action
// and return new state
// we have whis state as a empty obj
// and then switch by action type
// by default return the same state

// But now we want to handel case with USER_LOGGED_IN
export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user; // the pice of state
    default:
      return state;
  }
}
