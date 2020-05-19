import React from 'react';

import logo from '../../assets/logo/header-logo.svg';
import './Header.module.css';

const Header = (props) => {
    return (
        <header>
            <nav className="navbar">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt=""/>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <b><a href="#/" className="nav-link">sign in</a></b>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
