import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {

  componentWillMount() {
    this.lock = new Auth0Lock('TL6WvwO2DMfOKAUgK4WuWWzbkN57qVyk', 'rgsphilipstudent.auth0.com'); //client id, auth0domain
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
