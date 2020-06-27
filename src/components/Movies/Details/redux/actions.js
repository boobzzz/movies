import * as T from './types';
import fetchApiData from '../../../../store/rootAction';

export const fetchMovieDetails = (url, options) => {
    return fetchApiData(url, options, T.FETCH_DETAILS)
}

export const fetchMovieVideos = (url, options) => {
    return fetchApiData(url, options, T.FETCH_VIDEOS)
}

export const fetchMovieCast = (url, options) => {
    return fetchApiData(url, options, T.FETCH_CAST)
}
