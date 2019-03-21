// This is the file that combile all reducers
import newUser from './newUser.reducer';
import users from './users.reducer';
import posts from './posts.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  users,
  posts,
  newUser
});
export default rootReducer;
