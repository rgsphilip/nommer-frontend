import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import LoginButtons from './LoginButtons';
import './Login.css';

class LoginGreeting extends Component {
  render() {
    return (
      <Jumbotron className="login">
        <div className="container">
          <h1 className="title">Welcome to Nommer</h1>
          <p className="info">Nommer is a tool to save recipes, schedules meals throughout the week, and manage grocery lists.</p>
          <LoginButtons />
        </div>
    </Jumbotron>   
    );
  }
}

export default LoginGreeting;
