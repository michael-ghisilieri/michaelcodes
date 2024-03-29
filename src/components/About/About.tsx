import React, { useCallback, useEffect, useState } from 'react';

import { Tooltip } from 'react-tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './About.css';

import personalPhoto from '../../images/itme.jpg';
import github from '../../images/aboutMeIcons/githubIconBlack.svg';
import linkedin from '../../images/aboutMeIcons/linkedinIconBlack.svg';
import cssLogo from '../../images/aboutMeIcons/css.png';
import githubLogo from '../../images/aboutMeIcons/github.png';
import htmlLogo from '../../images/aboutMeIcons/html.png';
import typescriptLogo from '../../images/aboutMeIcons/typescript.png';
import angularLogo from '../../images/aboutMeIcons/angular.png';
import reactLogo from '../../images/aboutMeIcons/react.png';
import mailBlack from '../../images/mailBlack.png';

import textData from '../../common/content.json';

const About = () => {
  const [message, setMessage] = useState(
    'Click here to copy my email address!'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyEmail = useCallback(() => {
    setMessage('My email is now copied to your clipboard!');
  }, []);

  return (
    <div>
      <div className="aboutme-page">
        <div className="profile-card">
          <img id="personal-photo" src={personalPhoto} alt="profile-pic" />
          <CopyToClipboard text="michael.ghisilieri@gmail.com">
            <a onClick={copyEmail} data-tooltip-id="about-tip">
              <img
                className="profile-card-icons mobile-icon-margin"
                id="mail-img-about"
                src={mailBlack}
                alt="email"
              />
              <span id="send-email">Contact me by sending an email!</span>
            </a>
          </CopyToClipboard>
          <Tooltip
            id="about-tip"
            content={message}
            place="top"
            variant="dark"
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
            <>Here are the main languages and tools that are keeping me busy!</>
          </p>
          <div className="aboutme-icons">
            <div className="aboutme-icon-group">
              <img src={typescriptLogo} alt="typescript" />
              <span>TypeScript</span>
            </div>
            <div className="aboutme-icon-group">
              <img src={angularLogo} alt="angular" />
              <span>Angular</span>
            </div>
            <div className="aboutme-icon-group">
              <img src={reactLogo} alt="react" />
              <span>React</span>
            </div>
            <div className="aboutme-icon-group">
              <img src={htmlLogo} alt="html" />
              <span>HTML5</span>
            </div>
            <div className="aboutme-icon-group">
              <img src={cssLogo} alt="css" />
              <span>CSS3</span>
            </div>
            <div className="aboutme-icon-group">
              <img src={githubLogo} alt="github" />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
