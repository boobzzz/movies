import React from 'react';

import './Header.module.css';

const Header = (props) => {
    return (
        <header>
            <nav className="navbar">
                <a href="1" className="navbar-brand">
                    <img src="images/logo/header-logo.svg" alt=""/>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <b><a href="1" className="nav-link">sign in</a></b>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
