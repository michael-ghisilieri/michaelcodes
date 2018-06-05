import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img src={ require('../../images/header-background.jpg') } alt="header background"/>
          <div className="segoe-font centered">michael ghisilieri</div>
        </div>
      </div>
    );
  }
}

export default Home;