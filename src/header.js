import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <h3>
            <Link to="/" className="name">
              michael ghisilieri
            </Link>
          </h3>

          <nav>
            <ul>
              <li>
                <Link to="/about-me" className="header-links">
                  about me
                </Link>
              </li>
              <li>
                <Link to="/personal" className="header-links">
                  personal
                </Link>
              </li>
              <li>
                <Link to="/professional" className="header-links">
                  professional
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
