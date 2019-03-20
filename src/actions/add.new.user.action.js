import axios from 'axios';

export const ADD_NEW_USER = ' ADD_NEW_USER';

export const userSignupRequest = newUserData => {
  return dispatch => {
    return axios.post('http://localhost:3004/users', newUserData);
  };
  // return dispatch => {
  //   return axios
  //     .post('http://localhost:3004/users', newUserData)
  //     .then(res => res.data)
  //     .then(users => {
  //       dispatch({
  //         type: ADD_NEW_USER,
  //         payload: users
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
};
