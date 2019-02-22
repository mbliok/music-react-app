import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import axios from 'axios';
//
import Layout from './components/Layout/Layout';
import HomePage from './containers/pages/HomePage';
import LoginPage from './containers/pages/LoginPage';
import MusicList from './containers/MusicList/MusicList';
import User from './containers/User/User';

// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui container">
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/playlist" component={MusicList} />
            <Route path="/user" component={User} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
