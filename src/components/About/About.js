import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './About.css'
import personalPhoto from '../../images/itme.jpg'
import github from '../../images/aboutMeIcons/githubIconBlack.svg'
import linkedin from '../../images/aboutMeIcons/linkedinIconBlack.svg'
import cssLogo from '../../images/aboutMeIcons/css.png'
import githubLogo from '../../images/aboutMeIcons/github.png'
import htmlLogo from '../../images/aboutMeIcons/html.png'
import javascriptLogo from '../../images/aboutMeIcons/javascript.png'
import nodejsLogo from '../../images/aboutMeIcons/nodejs.png'
import reactLogo from '../../images/aboutMeIcons/react.png'
import textData from '../../content.json'
import mailBlack from '../../images/mailBlack.png'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click here to copy my email address!',
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  copyEmail = () => {
    this.setState({ message: 'My email is now copied to your clipboard!' })
  }

  render() {
    return (
      <div>
        <div className="aboutme-page">
          <div className="profile-card">
            <img id="personal-photo" src={personalPhoto} alt="profile-pic" />
            <CopyToClipboard
              text="michael.ghisilieri@gmail.com"
              className="mobile-icon-margin"
            >
              <a
                onClick={this.copyEmail}
                data-for="about-tip"
                data-tip={this.state.message}
                data-place="top"
              >
                <img
                  className="profile-card-icons"
                  id="mail-img-about"
                  src={mailBlack}
                  alt="email"
                />
                <span id="send-email">Contact me by sending an email!</span>
              </a>
            </CopyToClipboard>
            <ReactTooltip
              id="about-tip"
              type="light"
              effect="float"
              getContent={() => this.state.message}
            />
            <div className="mobile-icon-margin">
              <a
                className="hide-decoration"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/michael-ghisilieri"
              >
                <img
                  className="profile-card-icons github-profile"
                  src={github}
                  alt="github"
                />
                <span className="profile-card-links">
                  github.com/michael-ghisilieri
                </span>
              </a>
            </div>
            <div className="mobile-icon-margin">
              <a
                className="hide-decoration"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/michael-ghisilieri/"
              >
                <img
                  className="profile-card-icons linkedin-profile"
                  src={linkedin}
                  alt="linkedin"
                />
                <span className="profile-card-links">
                  linkedin.com/in/michael-ghisilieri
                </span>
              </a>
            </div>
          </div>
          <div className="aboutme-desc">
            <h1>about me</h1>
            <p>{textData.aboutMe1}</p>
            <p>{textData.aboutMe2}</p>
            <p>
              Here are the main languages and tools that are keeping me busy!
            </p>
            <ul className="aboutme-icons">
              <li>
                <img src={javascriptLogo} alt="javascript" />
                JavaScript
              </li>
              <li>
                <img src={nodejsLogo} alt="nodejs" />
                Node.js
              </li>
              <li>
                <img src={reactLogo} alt="react" />
                React
              </li>
              <li>
                <img src={htmlLogo} alt="html" />
                <span>HTML5</span>
              </li>
              <li>
                <img src={cssLogo} alt="css" />
                <span>CSS3</span>
              </li>
              <li>
                <img src={githubLogo} alt="github" />
                GitHub
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About
