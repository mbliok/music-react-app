import { LOG_IN_SUCCESS } from '../actions/sessionActions';

import { browserHistory } from 'react-router-dom';

const initialState = {
  session: !!sessionStorage.jwt
};

export default function sessionReducer(state = initialState.session, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      //  browserHistory.push('/');
      return !!sessionStorage.jwt;
    default:
      return state;
  }
}
