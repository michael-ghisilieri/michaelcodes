import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { Navbar, Nav, Button, ButtonToolbar } from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <h3 className="name">michael ghisilieri</h3>
          <navi>
            <ul>
              <li>
                <Link to="/about-me" className="custom-links">about me</Link>
              </li>
              <li>
                <Link to="/games" className="custom-links">games</Link>
              </li>
              <li>
                <Link to="/projects" className="custom-links">projects</Link>
              </li>
            </ul>
          </navi>
        {/*
        <Navbar className="navbar-custom" fluid>
          <Navbar.Header>
            <Navbar.Brand className="navbar-custom"> 
              <Link to="/home">michael ghisilieri</Link>
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
      </header>
    );
  }
}

export default App;
