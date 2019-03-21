import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export const getAllPosts = () => {
  return dispatch => {
    return axios
      .get('http://localhost:3004/posts')
      .then(res => res.data)
      .then(posts => {
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
