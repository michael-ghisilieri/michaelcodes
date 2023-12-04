import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { DropdownType } from '../../common/types';

import './Header.css';

import menu from '../../images/menuWhite.png';
import mailIcon from '../../images/mailIcon.png';

const Header = () => {
  const [message, setMessage] = useState(
    'Click here to copy my email address!'
  );

  const [dropdown, setDropdown] = useState<DropdownType>('none');

  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);

    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, []);

  const handleClick = useCallback((event: MouseEvent) => {
    if (aboutRef?.current?.contains(event.target as Node)) {
      // click was inside of the component
      return;
    }

    // click was outside of the component
    setDropdown('none');
  }, []);

  const copyEmail = useCallback(() => {
    setMessage('My email is now copied to your clipboard!');
  }, []);

  const toggleDropdown = useCallback(() => {
    const toggled = dropdown === 'none' ? 'block' : 'none';
    setDropdown(toggled);
  }, [dropdown]);

  const clearDropdown = useCallback(() => {
    setDropdown('none');
  }, []);

  return (
    <header ref={aboutRef}>
      <div className="container">
        <h3>
          <Link to="/" className="name" onClick={clearDropdown}>
            michael ghisilieri
          </Link>
        </h3>

        <div className="menu-width">
          <img id="menu-img" src={menu} alt="menu" onClick={toggleDropdown} />
        </div>
        <div className="dropdown" style={{ display: dropdown }}>
          <ul>
            <li>
              <Link
                to="/about"
                className="dropdown-links"
                onClick={toggleDropdown}
              >
                about me
              </Link>
            </li>
            <li>
              <Link
                to="/professional"
                className="dropdown-links"
                onClick={toggleDropdown}
              >
                professional
              </Link>
            </li>
            <li>
              <Link
                to="/personal"
                className="dropdown-links"
                onClick={toggleDropdown}
              >
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
              <li data-tooltip-id="header-tip">
                <a onClick={copyEmail}>
                  <img id="mail-img-header" src={mailIcon} alt="email" />
                </a>
              </li>
            </CopyToClipboard>
            <Tooltip
              id="header-tip"
              content={message}
              place="bottom"
              variant="light"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
