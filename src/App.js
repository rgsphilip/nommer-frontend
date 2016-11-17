import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import {auth0pass, auth0name } from './secret';

class App extends Component {

  componentWillMount() {
    this.lock = new Auth0Lock(auth0pass, auth0name); //client id, auth0domain
  }
  render() {
    return (
      <div className="App">
        <Header lock={this.lock} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
