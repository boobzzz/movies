import React from 'react';
import { connect } from 'react-redux';
import * as A from './redux/actions';
import * as R from '../../../store/rootActions';
import * as S from './redux/selectors';
import * as C from '../../../utils/api/constants';

import { Heart } from 'react-bytesize-icons';
import classes from './Icons.module.css';

const api = {
    key: C.API_KEY_V3,
    endpoint: C.API_ENDPOINT
}

const IconsHeart = (props) => {
    const { id, size, modal, favoriteList, userId, sessionId, setFavorite, toggleModal } = props
    const isFavorite = favoriteList.some(item => item.id === id)
    const options = {
        method: 'POST',
        body: {
            media_type: 'movie',
            media_id: id,
            favorite: !isFavorite
        }
    }

    const markAsFavorite = () => {
        sessionId !== ''
        ? setFavorite(api, userId, sessionId, options)
        : toggleModal(!modal)
    }

    return (
        <div className={classes.Icon} onClick={markAsFavorite}>
            {!isFavorite
                ? <Heart
                    className={classes.Outlined}
                    width={size}
                    height={size} />
                : <Heart
                    className={classes.Filled}
                    width={size}
                    height={size} />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        modal: S.getToggled(state),
        favoriteList: S.getFavorite(state),
        userId: S.getUser(state),
        sessionId: S.getSessionId(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFavorite: (api, userId, sessionId, options) => dispatch(
            A.setFavorite(api, userId, sessionId, options)),
        toggleModal: (modal) => dispatch(R.getToggle(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IconsHeart);
