import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render() {
        return (
        <header>
            <div className="container">

                <h3 className="name">michael ghisilieri</h3>

                <navi>
                <ul>
                    <li>
                    <Link to="/about-me" className="custom-links">about me</Link>
                    </li>
                    <li>
                    <Link to="/games" className="custom-links">games</Link>
                    </li>
                    <li>
                    <Link to="/projects" className="custom-links">projects</Link>
                    </li>
                </ul>
                </navi>

            </div>
        </header>
        );
    }
}

export default Header;
