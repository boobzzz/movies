import * as T from './types';
import * as R from '../../../store/rootActions';

export const getUpdateAuth = (api, userId, sessionId) => async (dispatch) => {
    const user = await R.getUser(api, sessionId)
    const favoriteList = await R.getFavoriteList(api, userId, sessionId)
    const watchList = await R.getWatchList(api, userId, sessionId)

    dispatch({
        type: T.UPDATE_AUTH,
        payload: {
            session: sessionId,
            user: user,
            favorite: favoriteList,
            watch: watchList
        }
    })
}
