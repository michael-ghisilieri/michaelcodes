import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './header.css'
import menu from './images/menuWhite.png'
import mailIcon from './images/mailIcon.png'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click here to copy my email address!',
      dropdown: 'none',
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = event => {
    if (ReactDOM.findDOMNode(this).contains(event.target)) {
      // click was inside of the component
      return;
    }

    // click was outside of the component
    this.setState({ dropdown: 'none' });
  }

  copyEmail = () => {
    this.setState({ message: 'My email is now copied to your clipboard!' })
  }

  toggleDropdown = () => {
    var dropdown = this.state.dropdown === 'none' ? 'block': 'none';
    this.setState({ dropdown: dropdown })
  }

  clearDropdown = () => {
    this.setState({ dropdown: 'none' })
  }

  render() {
    return (
      <header>
        <div className="container">
          <h3>
            <Link to="/" className="name" onClick={this.clearDropdown}>
              michael ghisilieri
            </Link>
          </h3>

          <div className="menu-width">
            <img id="menu-img" src={menu} alt="menu" onClick={this.toggleDropdown}/>
          </div>
          <div className="dropdown" style={{display: this.state.dropdown}}>
            <ul>
              <li>
                <Link to="/about" className="dropdown-links" onClick={this.toggleDropdown}>
                  about me
                </Link>
              </li>
              <li>
                <Link to="/professional" className="dropdown-links" onClick={this.toggleDropdown}>
                  professional
                </Link>
              </li>
              <li>
                <Link to="/personal" className="dropdown-links" onClick={this.toggleDropdown}>
                  personal
                </Link>
              </li>
            </ul>
          </div>

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
                <li
                  data-for="header-tip"
                  data-tip={this.state.message}
                  data-place="bottom"
                >
                  <a onClick={this.copyEmail}>
                    <img id="mail-img-header" src={mailIcon} alt="email" />
                  </a>
                </li>
              </CopyToClipboard>
              <ReactTooltip
                id="header-tip"
                type="light"
                effect="float"
                getContent={() => this.state.message}
              />
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
