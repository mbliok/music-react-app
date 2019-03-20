import React from 'react';
import { createStore, applyMiddleware } from 'redux'; // create the store with react, the most important func
import { Provider } from 'react-redux'; // use to conect redux and react
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'semantic-ui-css/semantic.min.css';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';

// 1. create store as a fuck with 2 arguments

//  - use applyMiddleware to add the thunk middleware to the store
//  I'm using the redux-devtools-extension, for that reason the  applyMiddleware funk is
// wraped with it ( the composeWithDevTools)

// 2. We want to use the provider is a hoc
// and provider takes store props whitch is my const store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
