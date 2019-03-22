import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOG_OUT = 'LOG_OUT';

export const loginAction = credentials => {
  console.log('The prop credentials are identifier and password ', credentials);
  return dispatch => {
    return axios
      .post('http://localhost:3004/users', credentials)
      .then(res => res.data)

      .then(isLogged => {
        //  const { identifier, password } = res.body;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: isLogged
        });
      })
      .catch(error => {
        dispatch({
          type: LOGIN_ERROR
          //  payload: isLogged
        });
      });
    // if (username === identifier && password === password) {
    //   console.log('aa', credentials);
    // } else if (console.log('bb ', credentials)) {
    // } else {
    //   console.log('cc ', credentials);
    // }
  };

  // return new Promise((resolve, reject) => {
  //   axios
  //     .post('http://localhost:3004/users', credentials)
  //     .then(res => res.data);
  //   const { identifier, password } = res.body;
  //   if (username === identifier && password === password) {
  //     resolve({});
  //     console.log('aa', credentials);
  //   } else if (console.log('bb ', credentials)) {
  //     resolve({});
  //   } else {
  //     reject({});
  //     console.log('cc ', credentials);
  //   }
  // });
};
