import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Button, ButtonToolbar } from 'react-bootstrap';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Games from './components/Games/Games';
import AboutMe from './components/AboutMe/AboutMe';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">We going back home</Link>
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
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/games" component={Games}/>
          <Route path="/about-me" component={AboutMe}/>
        </div>
      </Router>
    );
  }
}

export default App;
