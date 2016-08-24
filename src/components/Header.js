import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Header.css';


class LoginPanel extends Component {
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
            <NavItem eventKey={3} href="#">Build Grocery List</NavItem>
            <NavItem eventKey={4} href="#">Calendar</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="http://localhost:3001/logout">Log Out</NavItem>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    );
  }
}

export default LoginPanel;


// <div className="header">
//           <nav className="navbar">
//             <div className="container-fluid">              
//               <h2>Nommer</h2>
//             </div>
//           </nav>
//         </div>