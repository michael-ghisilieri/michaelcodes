import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import github from './images/github32px.png'
import linkedin from './images/linkedin34px.png'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container3">
          <div className="footer-name">
            &copy; 2018 Michael Ghisilieri
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/about-me" className="footer-links">
                  about me
                </Link>
              </li>
              <li>
                <Link to="/personal" className="footer-links">
                  personal
                </Link>
              </li>
              <li>
                <Link to="/professional" className="footer-links">
                  professional
                </Link>
              </li>
            </ul>
          </nav>

          <div className="footer-icons">
            <Link style={{'padding-right': '20px'}} target="_blank" to="https://github.com/michael-ghisilieri">
              <img src={github} alt="github logo" />
            </Link>

            <Link target="_blank" to="https://www.linkedin.com/in/michael-ghisilieri/">
              <img src={linkedin} alt="linkedin logo" />
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
