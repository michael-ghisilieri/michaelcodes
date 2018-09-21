import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './header.css'
import mailIcon from './images/mailIcon.png'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click here to copy my email address!",
    };

    this.copyEmail = this.copyEmail.bind(this);
  }

  copyEmail() {
    this.setState(
      {message: "My email is now copied to your clipboard!"}
    );
    //alert("Copied the email: " + copyText.value);
  }

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
                <Link to="/about" className="header-links">
                  about me
                </Link>
              </li>
              <li>
                <Link to="/professional" className="header-links">
                  professional
                </Link>
              </li>
              <li>
                <Link to="/personal" className="header-links">
                  personal
                </Link>
              </li>
              <CopyToClipboard text="michael.ghisilieri@gmail.com">
                <li data-for="header-tip" data-tip={this.state.message} data-place="bottom">
                  <a onClick={this.copyEmail}>
                    <img id="mail-img" src={mailIcon} />
                  </a>
                </li>
              </CopyToClipboard>
              <ReactTooltip id="header-tip" type="light" effect="solid" getContent={() => this.state.message}/>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
