import React, { useState } from 'react';

import logo from '../../assets/logo/header-logo.svg';
import ModalContainer from '../UI/Modal/Modal';
import './Header.module.css';

const Header = (props) => {
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        <>
            <header>
                <nav className="navbar">
                    <a href="/" className="navbar-brand">
                        <img src={logo} alt=""/>
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#/" className="nav-link" onClick={toggle}>
                                <b>sign in</b>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <ModalContainer
                modal={modal}
                toggle={toggle}
                title="Authorization"
                modalBody="This is the Modal Body" />
        </>
    )
}

export default Header;
