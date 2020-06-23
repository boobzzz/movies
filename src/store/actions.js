import fetchJSON from '../utils/api/api.js';

const fetchApiData = (url, options, type) => async (dispatch) => {
    const response = await fetchJSON(url, options)
    const data = response.body

    dispatch({
        type: type,
        payload: data
    })
}

export const fetchMovies = (url, options) => {
    return fetchApiData(url, options, 'FETCH_MOVIES')
}

export const fetchGenres = (url, options) => {
    return fetchApiData(url, options, 'FETCH_GENRES')
}

export const fetchMovieDetails = (url, options) => {
    return fetchApiData(url, options, 'FETCH_DETAILS')
}

export const fetchMovieVideos = (url, options) => {
    return fetchApiData(url, options, 'FETCH_VIDEOS')
}

export const fetchMovieCast = (url, options) => {
    return fetchApiData(url, options, 'FETCH_CAST')
}
