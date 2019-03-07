import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import RegisterPage from './containers/pages/RegisterPage';
import Posts from './containers/pages/Posts';
import SinglePost from './containers/Post/SinglePost';
import LoginPage from './containers/pages/LoginPage';
// import HomePage from './containers/pages/HomePage';

// import MusicList from './containers/MusicList/MusicList';
import userContainer from './containers/User/UserContainere';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Layout>
            <Switch>
              {/* <Route path="/" component={HomePage} /> */}
              <Route path="/posts" component={Posts} />
              <Route path="/:post_id" component={SinglePost} />
              <Route path="/signup" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/users" component={userContainer} />
              {/* 
              <Route path="/playlist" component={MusicList} />
             
              <Route exact path="/login" component={LoginPage} /> */}
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
