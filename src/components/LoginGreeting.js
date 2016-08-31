import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Login.css';

class LoginGreeting extends Component {
  render() {
    return (
      <Jumbotron className="login">
        <div className="container">
          <h1>Welcome to Nommer</h1>
          <p className="info">Nommer is a tool to save recipes, organize them with tags, and manage grocery lists. Log in to get started.</p>
        </div>
    </Jumbotron>   
    );
  }
}

export default LoginGreeting;
