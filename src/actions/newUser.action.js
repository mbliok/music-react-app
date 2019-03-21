import axios from 'axios';

export const ADD_USER = 'ADD_USER';

export const addNewUser = newUserData => {
  return dispatch => {
    return axios
      .post('http://localhost:3004/users', newUserData)
      .then(res => res.data)
      .then(newUser => {
        dispatch({
          type: ADD_USER,
          payload: newUser
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
