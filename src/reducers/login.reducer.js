import { LOGIN_SUCCESS } from '../actions/login.action';
import { LOGIN_ERROR } from '../actions/login.action';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('Login success');
      return [...state, ...action.payload];
    case LOGIN_ERROR:
      console.log('Login error');
      return [...state, ...action.payload];

    default:
      return state;
  }
};
