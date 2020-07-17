import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as A from './redux/actions';
import * as R from '../../store/rootActions';
import * as S from './redux/selectors';
import * as C from '../../utils/api/constants';

import logo from '../../assets/logo/header-logo.svg';
import ModalContainer from '../UI/Modal/Modal';
import SignInForm from '../SignIn/Form/SignInForm';
import SignInUser from '../SignIn/User/SignInUser';
import './Header.module.css';

const avatarUrl = C.AVATAR_URL
const api = {
    endpoint: C.API_ENDPOINT,
    key: C.API_KEY_V3
}

const Header = (props) => {
    const { modal, isSubmitted, cookies, user, setModal, updateAuth } = props
    const userId = user.id

    useEffect(() => {
        setModal(false)
        if (cookies !== undefined) updateAuth(api, userId, cookies)
    }, [isSubmitted, userId, cookies, setModal, updateAuth])

    const toggleModal = () => setModal(!modal)

    return (
        <>
            <header>
                <nav className="navbar">
                    <a href="/movies" className="navbar-brand">
                        <img src={logo} alt="logo"/>
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {!isSubmitted
                            ? <a href="#/" className="nav-link" onClick={toggleModal}>
                                <b>sign in</b>
                            </a>
                            : <SignInUser
                                url={avatarUrl}
                                hash={user.avatar.gravatar.hash}
                                user={user.username} />}
                        </li>
                    </ul>
                </nav>
            </header>
            <ModalContainer
                modal={modal}
                toggle={toggleModal}
                title="Authorization"
                modalBody={<SignInForm />} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        modal: S.getToggled(state),
        isSubmitted: S.getIsSubmitted(state),
        cookies: S.getCookies(state),
        user: S.getUser(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setModal: (modal) => dispatch(R.getToggle(modal)),
        updateAuth: (api, userId, sessionId) => dispatch(
            A.getUpdateAuth(api, userId, sessionId)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
