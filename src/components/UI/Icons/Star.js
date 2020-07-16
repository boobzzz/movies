import React from 'react';
import { connect } from 'react-redux';
import * as A from './redux/actions';
import * as R from '../../../store/rootActions';
import * as S from './redux/selectors';
import * as C from '../../../utils/api/constants';

import { Star } from 'react-bytesize-icons';
import classes from './Icons.module.css';

const api = {
    key: C.API_KEY_V3,
    endpoint: C.API_ENDPOINT
}

const IconsHeart = (props) => {
    const { id, size, modal, watchList, userId, sessionId, setWatchList, toggleModal } = props
    const inWatchlist = watchList.some(item => item.id === id)
    const options = {
        method: 'POST',
        body: {
            media_type: 'movie',
            media_id: id,
            watchlist: !inWatchlist
        }
    }

    const addToWatchlist = () => {
        sessionId !== ''
        ? setWatchList(api, userId, sessionId, options)
        : toggleModal(!modal)
    }

    return (
        <div className={classes.Icon} onClick={addToWatchlist}>
            {!inWatchlist
                ? <Star
                    className={classes.Outlined}
                    width={size}
                    height={size} />
                : <Star
                    className={classes.Filled}
                    width={size}
                    height={size} />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        modal: S.getToggled(state),
        watchList: S.getWatchList(state),
        userId: S.getUser(state),
        sessionId: S.getSessionId(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWatchList: (api, userId, sessionId, options) => dispatch(
            A.setToWatch(api, userId, sessionId, options)),
        toggleModal: (modal) => dispatch(R.getToggle(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IconsHeart);
