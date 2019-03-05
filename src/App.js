import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Navbar from '../src/components/Navigation/Navbar';
import HomePage from './containers/pages/HomePage';
import LoginPage from './containers/pages/LoginPage';
import MusicList from './containers/MusicList/MusicList';
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
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Layout>
              <Route path="/" component={HomePage} />
              <Route path="/playlist" component={MusicList} />
              <Route path="/users" component={userContainer} />
            </Layout>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
