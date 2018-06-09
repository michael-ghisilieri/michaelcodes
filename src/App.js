import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { Navbar, Nav, Button, ButtonToolbar } from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <body>
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
          </div>
        </header>

        <img className="header-img" src={ require('./images/orangejustice_crop.png') } alt="orange justice"/>

      <h2><p>heeeeeeelp</p></h2>

      </body>

    );
  }
}

export default App;
