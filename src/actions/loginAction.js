import axios from 'axios';

export function loginAction(userLoginData) {
  return dispatch => {
    return axios.post('http://localhost:3004/users', userLoginData);
  };
}
