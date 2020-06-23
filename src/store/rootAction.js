import fetchJSON from '../utils/api/api.js';

const fetchApiData = (url, options, type) => async (dispatch) => {
    const response = await fetchJSON(url, options)
    const data = response.body

    dispatch({
        type: type,
        payload: data
    })
}

export default fetchApiData;
