import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './footer.css'
import mailIcon from './images/mailIcon.png'
import github from './images/github32px.png'
import linkedin from './images/linkedin34px.png'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click here to copy my email address!",
    };
  }

  copyEmail = () => {
    this.setState(
      {message: "My email is now copied to your clipboard!"}
    );
  }

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
            </ul>
          </nav>

          <div className="footer-icons">
            <CopyToClipboard text="michael.ghisilieri@gmail.com">
              <a onClick={this.copyEmail} data-for="footer-tip" data-tip={this.state.message} data-place="top">
                <img id="mail-img-footer" src={mailIcon} alt="email"/>
              </a>
            </CopyToClipboard>
            <ReactTooltip id="footer-tip" type="light" effect="float" getContent={() => this.state.message}/>

            <a target="_blank" rel="noopener noreferrer" href="https://github.com/michael-ghisilieri">
              <img src={github} alt="github logo" />
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-ghisilieri/">
              <img src={linkedin} alt="linkedin logo" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
