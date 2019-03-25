import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Navbar from './components/Layout/Navbar';
import RegisterPage from './containers/pages/RegisterPage';
// import Posts from './containers/pages/Posts';
import SinglePost from './containers/Post/SinglePost';
import LoginPage from './containers/pages/LoginPage';
import HomePage from './containers/pages/HomePage';

// import MusicList from './containers/MusicList/MusicList';
import userContainer from './containers/User/UserContainere';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // requireAuth = (nextState, replace) => {
  //   if (!sessionStorage.jwt) {
  //     replace({
  //       pathname: '/login',
  //       state: { nextPathname: nextState.location.pathname }
  //     });
  //   }
  // };
  render() {
    return (
      <div className="wallpaper">
        <Switch>
          <Layout>
            <Navbar />
            <Route
              exact
              path="/"
              component={HomePage}
              //  onEnter={this.requireAuth}
            />
            {/* <Route path="/posts" component={Posts} /> */}
            <Route path="/:post_id" component={SinglePost} />
            <Route path="/signup" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/users" component={userContainer} />
            {/* 
              <Route path="/playlist" component={MusicList} />
             
             */}
          </Layout>
        </Switch>
      </div>
    );
  }
}

export default App;
