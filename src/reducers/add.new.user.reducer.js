import { ADD_NEW_USER } from '../actions/add.new.user.action';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
