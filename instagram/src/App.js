import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/Post Container/PostsPage'
import withAuthenticate from './authentication/authenticate'
import LoginPage from './components/Login/Login'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    }
  }

  render() {
    return (
      <ComponentFromWithAuthenticate />
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(App)(LoginPage);

export default App;
