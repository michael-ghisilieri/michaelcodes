import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, ButtonToolbar } from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar-custom" fluid>
          <Navbar.Header>
            <Navbar.Brand className="navbar-custom"> 
              <Link to="/home">WELCOME TO THE EXTRAVAGANZA</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <ButtonToolbar>
              <Link to="/about-me">
                <Button className="button-margin btn btn-light btn-custom">About Me</Button>
              </Link>
              <Link to="/games">
                <Button className="button-margin btn btn-light btn-custom">Games</Button>
              </Link>
              <Link to="/projects">
                <Button className="button-margin btn btn-light btn-custom">Projects</Button>
              </Link>
              <Button className="btn btn-light btn-custom">
                <img className="button-margin" src={ require('./images/menu.png') } alt="menu"/> Menu
              </Button>
            </ButtonToolbar>
          </Nav>
        </Navbar>
        {/*<hr />*/}
      </div>
    );
  }
}

export default App;
