import axios from 'axios';
// import { server } from './server/server-simulator/server';

export default {
  user: {
    login: credentials =>
      axios.post('api/auth', { credentials }).then(res => res.data.user)
    // axios.get('http://localhost:3004/users').then(res => res.data.user)
    // server
    //   .login(credentials)
    //   .then(result => {
    //    // result.token;
    //   })
    //   .catch(e => {
    //     // e.error
    //   })
  }
};
