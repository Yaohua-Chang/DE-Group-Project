import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import './App.css';
import {AUTH_TOKEN, CURR_USER} from './constants'
import Routes from "./Routes";

function App() {
  const authToken = localStorage.getItem(AUTH_TOKEN)
  // const user = localStorage.getItem(CURR_USER)

  return (
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
            {authToken ? (
              <NavItem onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                localStorage.removeItem(CURR_USER)
                window.location.href = "/"
              }}>
              Logout
              </NavItem>
            ) : (
              <NavItem href="/login">Login</NavItem>
            )}
            </Nav>
          </Navbar.Collapse>
          </Navbar>
          <Routes />
      </div>
  );
}

export default App;
