// here just combine reducers with combineReducers func form redux
// that help us to do this
import { combineReducers } from 'redux';

export default combineReducers({
  // in user we store emal and auth touken
  // creta a empty dummy reducer.
  // The reducer is a funk that takes state and return new state
  user: () => ({})
});
