import { ADD_USER } from '../actions/newUser.action';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, ...action.payload]; // ...

    default:
      return state;
  }
};
