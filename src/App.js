import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import { Navbar, Nav, Button, ButtonToolbar } from 'react-bootstrap';
import Header from './header';
import Panel from './components/Panels/Panel';
import codephoto from './images/code.jpg';
import indigo from './images/indigo-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <body>
        <Header />

        <img className="header-img" src={codephoto} alt="orange justice"/>

        <about>
          <h2>About Me</h2>
          <div className="line-bar"></div>

          <div>
            <p>Computer Engineer graduate who has found a new love for web development and design. Hop along for the ride.</p>
          </div>
        </about>

        <Panel image={indigo} imgPos='left' txtPos='right'/>
        <Panel image={indigo} imgPos='right' txtPos='left'/>
        <Panel image={indigo} imgPos='left' txtPos='right'/>
        <Panel image={indigo} imgPos='right' txtPos='left'/>
      </body>
    )
  }
}

export default App
