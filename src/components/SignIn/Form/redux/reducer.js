import * as T from './types';
import Cookies from 'universal-cookie';

const cookies = new Cookies()
const initialState = {
    values: {},
    isSubmitted: false,
    modalIsShown: false,
    sessionId: '',
    cookies: cookies.get('session_id'),
    userDetails: {},
    favoriteList: [],
    watchList: []
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case T.GET_VALUES:
            return {
                ...state,
                values: payload
            }
        case T.TOGGLE:
            return {
                ...state,
                modalIsShown: payload
            }
        case T.LOGIN:
            return {
                ...state,
                isSubmitted: true,
                sessionId: payload.session,
                cookies: cookies.set(
                    'session_id',
                    payload.session,
                    {path: '/', maxAge: 2592000}
                ),
                userDetails: payload.user,
                favoriteList: payload.favorite,
                watchList: payload.watch
            }
        case T.LOGOUT:
            return {
                ...state,
                isSubmitted: false,
                sessionId: '',
                cookies: cookies.remove('session_id', {path: '/'}),
                userDetails: {},
                favoriteList: [],
                watchList: []
            }
        case T.UPDATE_AUTH:
            return {
                ...state,
                isSubmitted: true,
                sessionId: payload.session,
                userDetails: payload.user,
                favoriteList: payload.favorite,
                watchList: payload.watch
            }
        case T.SET_FAVORITE:
            return {
                ...state,
                favoriteList: payload
            }
        case T.SET_TOWATCH:
            return {
                ...state,
                watchList: payload
            }
        default:
            return state
    }
}

export default authReducer;
