import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, ButtonToolbar } from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/home">We going back home</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <ButtonToolbar>
              <Link to="/about-me"><Button bsStyle="primary">About Me</Button></Link>
              <Link to="/games"><Button bsStyle="primary">Games</Button></Link>
              <Link to="/projects"><Button bsStyle="primary">Projects</Button></Link>
            </ButtonToolbar>
          </Nav>
        </Navbar>
        <hr />
      </div>
    );
  }
}

export default App;
