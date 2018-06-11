import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <img
            src={require('../../images/header-background.jpg')}
            alt="header background"
          />
          <div className="segoe-font top-text">Hi! I'm Michael Ghisilieri</div>
          <div className="segoe-font bottom-text">
            <i>Software Engineer & Web Developer</i>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
