import React, { Component } from 'react'
import './About.css'
import personalPhoto from '../../images/itme.jpg'
import cssLogo from '../../images/aboutMeIcons/css.png'
import githubLogo from '../../images/aboutMeIcons/github.png'
import htmlLogo from '../../images/aboutMeIcons/html.png'
import javascriptLogo from '../../images/aboutMeIcons/javascript.png'
import nodejsLogo from '../../images/aboutMeIcons/nodejs.png'
import reactLogo from '../../images/aboutMeIcons/react.png'
import textData from '../../content.json'

class About extends Component {
  render() {
    return (
      <div>
        <div className="aboutme-top">
          <img id="personal-photo" src={personalPhoto} alt="me" />
          <div>
            <h1>about me</h1>
            <p>{textData.aboutMe1}</p>
            <p>{textData.aboutMe2}</p>
            <p>Here are the main languages and tools that are keeping me busy!</p>
            <ul className="aboutme-icons">
              <li><img src={javascriptLogo} alt="javascript" />JavaScript</li>
              <li><img src={nodejsLogo} alt="nodejs" />Node.js</li>
              <li><img src={reactLogo} alt="react" />React</li>
              <li><img src={htmlLogo} alt="html" /><span>HTML5</span></li>
              <li><img src={cssLogo} alt="css" /><span>CSS3</span></li>
              <li><img src={githubLogo} alt="github" />GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About
