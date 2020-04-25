import * as R from 'ramda';
import fetchJSON from '../utils/api.js';

export const getApiData = (url, options) => async (dispatch) => {
    const response = await fetchJSON(url, options)
    const data = response.body
    const dataHas = R.has(R.__, data)
    let actionType = dataHas('genres') ? 'FETCH_GENRES' : 'FETCH_MOVIES'

    dispatch({
        type: actionType,
        payload: data
    })
}
