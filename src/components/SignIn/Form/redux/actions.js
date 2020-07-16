import fetchJSON from '../../../../utils/api/api.js';
import * as T from './types';
import * as R from '../../../../store/rootActions';

const createNewToken = async (api) => {
    const url = `${api.endpoint}${api.reqToken}?api_key=${api.key}`
    const response = await fetchJSON(url)

    return response.body.request_token
}

const validateToken = async (api, options, token) => {
    const url = `${api.endpoint}${api.validToken}?api_key=${api.key}`
    options = {
        ...options,
        body: {...options.body, request_token: token}
    }

    return await fetchJSON(url, options)
}

const createNewSession = async (api, options, token) => {
    const url = `${api.endpoint}${api.session}?api_key=${api.key}`
    options = {
        ...options,
        body: {request_token: token}
    }
    const response = await fetchJSON(url, options)

    return response.body.session_id
}

export const getLogin = (api, options) => async (dispatch) => {
    const token = await createNewToken(api)
    await validateToken(api, options, token)
    const sessionId = await createNewSession(api, options, token)
    const userDetails = await R.getUser(api, sessionId)
    const favoriteList = await R.getFavoriteList(api, userDetails.id, sessionId)
    const watchList = await R.getWatchList(api, userDetails.id, sessionId)

    dispatch({
        type: T.LOGIN,
        payload: {
            session: sessionId,
            user: userDetails,
            favorite: favoriteList,
            watch: watchList
        }
    })
}
