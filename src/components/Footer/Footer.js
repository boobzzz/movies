import React from 'react';

import logo from '../../assets/logo/footer-logo.svg';
import './Footer.module.css';

const Footer = (props) => {
    return (
        <footer>
            <a href="/">
                <img src={logo} alt=""/>
            </a>
        </footer>
    )
}

export default Footer;
