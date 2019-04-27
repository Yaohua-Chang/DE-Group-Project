import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import './App.css';
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="App container">
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">University Management</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/login">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    </div>
  );
}

export default App;
