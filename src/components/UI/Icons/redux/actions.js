import fetchJSON from '../../../../utils/api/api.js';
import * as T from './types';
import * as R from '../../../../store/rootActions';

export const setFavorite = (api, userId, sessionId, options) => async (dispatch) => {
    const url = `${api.endpoint}/account/${userId}/favorite?api_key=${api.key}&session_id=${sessionId}`
    await fetchJSON(url, options)
    const updateFavorite = await R.getFavoriteList(api, userId, sessionId)

    dispatch({
        type: T.SET_FAVORITE,
        payload: updateFavorite
    })
}

export const setToWatch = (api, userId, sessionId, options) => async (dispatch) => {
    const url = `${api.endpoint}/account/${userId}/watchlist?api_key=${api.key}&session_id=${sessionId}`
    await fetchJSON(url, options)
    const updateWatchList = await R.getWatchList(api, userId, sessionId)

    dispatch({
        type: T.SET_TOWATCH,
        payload: updateWatchList
    })
}
