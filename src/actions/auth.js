import { USER_LOGGED_IN } from '../types';
import api from '../api';

// my action is a funck that return another funck
// inside of it we make the API request
// that return a  promise
// v1  Get the data fron this request as a result api.user.login(credentials).then(res => res.data.user);

export const login = credentials => dispatch =>
  // v2
  // make an api request
  // Get data and dispatch redux action that change the store
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));

// need to export this userLoggedIn
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user // pass user
});
