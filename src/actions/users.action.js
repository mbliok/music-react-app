import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

export const getAllUsers = () => {
  return dispatch => {
    return axios
      .get('http://localhost:3004/users')
      .then(res => res.data)
      .then(users => {
        dispatch({
          type: FETCH_USERS,
          payload: users
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
