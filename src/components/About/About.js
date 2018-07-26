import React, { Component } from 'react'
import './About.css'
import personalPhoto from '../../images/itme.jpg'
import cssLogo from '../../images/aboutMeIcons/css.png'
import githubLogo from '../../images/aboutMeIcons/github.png'
import htmlLogo from '../../images/aboutMeIcons/html.png'
import javascriptLogo from '../../images/aboutMeIcons/javascript.png'
import nodejsLogo from '../../images/aboutMeIcons/nodejs.png'
import reactLogo from '../../images/aboutMeIcons/react.png'

class About extends Component {
  render() {
    return (
      <div>
        <div className="aboutme-top">
          <img id="personal-photo" src={personalPhoto} alt="me" />
          <div>
            <h1>about me</h1>
            <p>After completing my Bachelor's Degree in Computer Engineering in 2017 and wanting to expand my knowledge even further, I decided to pursue web development. This is something that I quickly got hooked on and haven't wanted to stop since.</p>
            <p>Web development is something I'm completely invested in now and will continue to pursue moving forward. I love being able to combine my creativity and passion for programming with new technologies in order to build and develop projects to make a better tomorrow.</p>
            <p>Here are the main languages and tools that are keeping me busy...</p>
            <ul className="aboutme-icons">
              <li><img src={javascriptLogo} alt="javascript" />JavaScript</li>
              <li><img src={nodejsLogo} alt="nodejs" />Node.js</li>
              <li><img src={reactLogo} alt="react" />React</li>
              <li><img src={htmlLogo} alt="html" />HTML5</li>
              <li><img src={cssLogo} alt="css" />CSS3</li>
              <li><img src={githubLogo} alt="github" />GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About
