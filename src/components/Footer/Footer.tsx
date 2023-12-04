import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './Footer.css';

import mailIcon from '../../images/mailIcon.png';
import githubIcon from '../../images/githubIconWhite.svg';
import linkedinIcon from '../../images/linkedinIconWhite.svg';

const Footer = () => {
  const [message, setMessage] = useState(
    'Click here to copy my email address!'
  );

  const copyEmail = useCallback(() => {
    setMessage('My email is now copied to your clipboard!');
  }, []);

  return (
    <div className="footer">
      <div>
        <div className="footer-name">
          <p>&copy; {new Date().getFullYear()} Michael Ghisilieri</p>
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
            <a onClick={copyEmail} data-tooltip-id="footer-tip">
              <img id="mail-img-footer" src={mailIcon} alt="email" />
            </a>
          </CopyToClipboard>
          <Tooltip
            id="footer-tip"
            content={message}
            place="top"
            variant="light"
            offset={30}
          />

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/michael-ghisilieri"
          >
            <img className="footer-social" src={githubIcon} alt="github logo" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/michael-ghisilieri/"
          >
            <img
              className="footer-social"
              src={linkedinIcon}
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
