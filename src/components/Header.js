import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { hashHistory } from 'react-router';
import './Header.css';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: AuthStore.isAuthenticated()
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  
  login() {
    this.props.lock.show((err, profile, token) => {
      if (err) {
        alert(err);
        return;
      }
      AuthActions.logUserIn(profile, token);
      this.setState({
        authenticated : true
      });
      hashHistory.push('/');
    });
  }

  logout() {
    AuthActions.logUserOut();
    this.setState({
      authenticated : false
    });
    hashHistory.push('/login');
  }
  render() {
    return (
      <Navbar className="navbar-default">

        <Navbar.Header>
          <Navbar.Brand>
            Nommer
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header> 
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/#/">Recipe Cards</NavItem>
            <NavItem eventKey={2} href="/#/tags">Filter by Tag</NavItem>
            <NavItem eventKey={3} href="/#/grocery">Build Grocery List</NavItem>
            {/*<NavItem eventKey={4} href="#">Calendar</NavItem>*/}
          </Nav>
          <Nav pullRight>
            { !this.state.authenticated ? (
              <NavItem eventKey={1} onClick={this.login}>Log In</NavItem>
            ) : (
              <NavItem eventKey={2} onClick={this.logout}>Log Out</NavItem>
            )}
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    );
  }
}

export default Header;


// <div className="header">
//           <nav className="navbar">
//             <div className="container-fluid">              
//               <h2>Nommer</h2>
//             </div>
//           </nav>
//         </div>