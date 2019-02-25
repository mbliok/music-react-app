// here just combine reducers with combineReducers func form redux
// that help us to do this
import { combineReducers } from 'redux';
import user from './reducers/user';

export default combineReducers({
  // in user we store emal and auth touken
  // creta a empty dummy reducer.
  // The reducer is a funk that takes state and return new state
  // here is the place were reducer handle this action dispached from the loginPage
  user // user: () => ({})
});
