import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
class LoginButtons extends Component {
  render() {
    return (
      <div className="login" style={wellStyles}>
        <Button bsStyle="primary" bsSize="large" href="http://localhost:3001/auth/facebook" block>Log in with Facebook</Button>
        <Button bsStyle="danger"bsSize="large" href="http://localhost:3001/auth/google" block>Log in with Google</Button>
        <Button bsStyle="info" bsSize="large" block>Log in with Twitter</Button>
      </div>
    );
  }
}

export default LoginButtons;


