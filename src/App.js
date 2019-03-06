import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import SignupPage from './containers/pages/SignupPage';
import WellcomePage from './containers/pages/WellcomePage';
import LoginPage from './containers/pages/LoginPage';
// import HomePage from './containers/pages/HomePage';

// import MusicList from './containers/MusicList/MusicList';
// import userContainer from './containers/User/UserContainere';

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
          <Switch>
            <Layout>
              <Route path="/hi" component={WellcomePage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/login" component={LoginPage} />
              {/* <Route path="/" component={HomePage} />
              <Route path="/playlist" component={MusicList} />
              <Route path="/users" component={userContainer} />
              <Route exact path="/login" component={LoginPage} /> */}
            </Layout>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
