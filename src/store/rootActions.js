import fetchJSON from '../utils/api/api.js';
import * as T from './rootTypes';

export const fetchApiData = (url, options, type) => async (dispatch) => {
    const response = await fetchJSON(url, options)
    const data = response.body

    dispatch({
        type: type,
        payload: data
    })
}

export const getToggle = (modal) => ({
    type: T.TOGGLE,
    payload: modal
})

export const getUser = async (api, session) => {
    const url = `${api.endpoint}/account?api_key=${api.key}&session_id=${session}`
    const response = await fetchJSON(url)

    return response.body
}

export const getFavoriteList = async (api, userId, sessionId) => {
    const url = `${api.endpoint}/account/${userId}/favorite/movies?api_key=${api.key}&session_id=${sessionId}`
    const response = await fetchJSON(url)

    return response.body.results
}

export const getWatchList = async (api, userId, sessionId) => {
    const url = `${api.endpoint}/account/${userId}/watchlist/movies?api_key=${api.key}&session_id=${sessionId}`
    const response = await fetchJSON(url)

    return response.body.results
}
