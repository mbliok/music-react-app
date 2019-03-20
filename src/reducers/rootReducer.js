// This is the file that combile all reducers
import newUser from './add.new.user.reducer';
import users from './users.reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  users // get users
  // posts
});
export default rootReducer;
