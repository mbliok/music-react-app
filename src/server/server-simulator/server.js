const mayasToken = 'saasda2d2adaadas2qddasdsa';
const slavisToken = '1321312123dasdadasddrf223';

export const server = {
  login: credentials => {
    return new Promise((resolve, reject) => {
      if (credentials.email === 'maya' && credentials.password === '123') {
        resolve({ token: mayasToken });
      } else if (
        credentials.email === 'slavi' &&
        credentials.password === 'slavipass'
      ) {
        resolve({ token: slavisToken });
      } else {
        reject({ error: 'Invalid password' });
      }
    });
  }
};
