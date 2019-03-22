import sessionApi from './SessionApi';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';

export const loginSuccess = () => {
  return { type: LOG_IN_SUCCESS };
};
export const logInUser = credentials => {
  return dispatch => {
    return sessionApi
      .login(credentials)
      .then(response => {
        localStorage.setItem('jwt', 'my token'); // response.jwt
        dispatch(loginSuccess());
      })
      .catch(error => {
        throw error;
      });
  };
};
