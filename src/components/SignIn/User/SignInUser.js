import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as A from './redux/actions';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

import classes from './SignInUser.module.css';

const SignInUser = (props) => {
    const { url, hash, user, logout } = props
    const [ dropdownOpen, setDropdownOpen ] = useState(false)

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

    const handleLogout = () => logout()

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle tag="div" className={classes.Toggle}>
                <img src={`${url}${hash}.jpg?s=27&d=identicon`} alt="UserMenu"/>
                <span>
                    <b>{user}</b>
                </span>
            </DropdownToggle>
            <DropdownMenu className={classes.Menu}>
                <DropdownItem tag="div" onClick={handleLogout}>
                    sign out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(A.getLogout())
    }
}

export default connect(null, mapDispatchToProps)(SignInUser);
