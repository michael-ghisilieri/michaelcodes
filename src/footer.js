import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import github from './images/github32px.png'
import linkedin from './images/linkedin34px.png'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <div className="footer-name">
            <p>&copy; 2018 Michael Ghisilieri</p>
            <p className="footer-credit">All icons on this page are credited to <a target="_blank" rel="noopener noreferrer" href="http://linea.io/">linea.io</a></p>
          </div>
        
          <nav>
            <ul>
              <li>
                <Link to="/about" className="footer-links">
                  about me
                </Link>
              </li>
              <li>
                <Link to="/professional" className="footer-links">
                  professional
                </Link>
              </li>
              <li>
                <Link to="/personal" className="footer-links">
                  personal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-links">
                  contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="footer-icons">
            <a style={{paddingRight: '20px'}} target="_blank" href="https://github.com/michael-ghisilieri">
              <img src={github} alt="github logo" />
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/michael-ghisilieri/">
              <img src={linkedin} alt="linkedin logo" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
