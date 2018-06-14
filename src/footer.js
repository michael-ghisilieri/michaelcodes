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
          <h4 className="name-footer">f o o t e r</h4>

          <nav>
            <ul>
              <li>
                <Link target="_blank" to="https://github.com/michael-ghisilieri">
                  <img src={github} alt="github logo" />
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.linkedin.com/in/michael-ghisilieri/">
                  <img src={linkedin} alt="linkedin logo" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer
